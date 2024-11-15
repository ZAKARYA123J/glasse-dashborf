import Image from "next/image";
import { StatisticsBlock } from "@/components/blocks/statistics-block";
import { BlockBadge, WelcomeBlock } from "@/components/blocks/welcome-block";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RevinueBarChart from "@/components/revenue-bar-chart";
import DashboardDropdown from "@/components/dashboard-dropdown";
import OverviewChart from "./components/overview-chart";
import CompanyTable from "./components/company-table";
import RecentActivity from "./components/recent-activity";
import ReactTablePage from "../../table/react-table/page";
import MostSales from "./components/most-sales";
import OverviewRadialChart from "./components/overview-radial";
import { useTranslations } from "next-intl";
const DashboardPage = () => {
    const t = useTranslations("AnalyticsDashboard");
    return (
      <div>
        <div className="grid grid-cols-12 items-center gap-5 mb-5">
          <div className="2xl:col-span-9  col-span-12">
            <Card>
              <CardContent className="p-4">
                <div className="grid md:grid-cols-4 gap-4">
                  <StatisticsBlock
                    title={"Total Clients"}
                    total="3,564"
                    className="bg-info/10 border-none shadow-none"
                  />
                  <StatisticsBlock
                    title={"Available staff"}
                    total="564"
                    className="bg-warning/10 border-none shadow-none"
                    chartColor="#FB8F65"
                  />
                  <StatisticsBlock
                    title={"Avaible materail"}
                    total="+5.0%"
                    className="bg-primary/10 border-none shadow-none"
                    chartColor="#2563eb"
                  />
                  <StatisticsBlock
                    title={t("")}
                    total="+5.0%"
                    className="bg-primary/10 border-none shadow-none"
                    chartColor="#2563eb"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="lg:col-span-12 col-span-12">
         
           <ReactTablePage/>
           
          </div>
        </div>
      </div>
    );
}

export default DashboardPage;