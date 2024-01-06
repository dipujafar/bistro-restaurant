/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { GiMoneyStack } from "react-icons/gi";
import { FaCarSide, FaPeopleGroup } from "react-icons/fa6";
import { IoFastFoodOutline } from "react-icons/io5";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
} from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "blue",
];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res?.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/order-stats");
      return res?.data;
    },
  });

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartData?.map((data) => {
    return { name: data.category, value: data.revenue };
  });

  return (
    <div>
      <Helmet>
        <title>Admin Home - Bistro</title>
      </Helmet>
      <h2 className="text-3xl uppercase">
        <span>Hi, Welcome </span>
        {user?.displayName ? user?.displayName : "Back"}
      </h2>
      <div className=" mt-3  stats stats-vertical lg:stats-horizontal flex justify-center flex-col lg:flex-row shadow text-white">
        <div className="stat bg-gradient-to-r from-purple-700 to-purple-200  ">
          <div className="flex gap-2 items-center justify-center">
            <GiMoneyStack className="text-5xl" />
            <div>
              <div className="stat-value text-center">{stats.revenue}</div>
              <div className="text-3xl font-medium">Revenue</div>
            </div>
          </div>
        </div>

        <div className="stat bg-gradient-to-r from-yellow-700 to-yellow-200  ">
          <div className="flex gap-2 items-center justify-center">
            <FaPeopleGroup className="text-5xl" />
            <div>
              <div className="stat-value text-center">{stats.users}</div>
              <div className="text-3xl font-medium">Users</div>
            </div>
          </div>
        </div>

        <div className="stat bg-gradient-to-r from-pink-700 to-pink-200  ">
          <div className="flex gap-2 items-center justify-center">
            <IoFastFoodOutline className="text-5xl" />
            <div>
              <div className="stat-value text-center">{stats.menuItems}</div>
              <div className="text-3xl font-medium">Menus</div>
            </div>
          </div>
        </div>
        <div className="stat bg-gradient-to-r from-cyan-700 to-blue-200  ">
          <div className="flex gap-2 items-center justify-center">
            <FaCarSide className="text-5xl" />
            <div>
              <div className="stat-value text-center">{stats.orders}</div>
              <div className="text-3xl font-medium">Revenue</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex gap-5 flex-col lg:flex-row justify-center">
        <div className="w-1/2">
          <BarChart
            width={550}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2">
          <PieChart width={450} height={350}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
