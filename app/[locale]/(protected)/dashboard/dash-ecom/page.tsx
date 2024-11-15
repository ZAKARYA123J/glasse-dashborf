import { StatusBlock } from "@/components/blocks/status-block";
import { WelcomeBlock } from "@/components/blocks/welcome-block";
import { Box, ShoppingCart, TrendingUp } from "lucide-react";
import Image from "next/image";
import RevinueBarChart from "@/components/revenue-bar-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardDropdown from "@/components/dashboard-dropdown";
import OrdersBlock from "@/components/blocks/orders-block";
import EarningBlock from "@/components/blocks/earning-block";
import Customer from "./components/customer";
import RecentOrderTable from "./components/recent-order-table";
import VisitorsReportChart from "./components/visitors-report";
import VisitorsChart from "./components/visitors-chart";
import MostSales from "./components/most-sales";
import { products } from "./components/data";
import Product from "./components/product";
import { useTranslations } from "next-intl";

const EcommercePage = () => {
  const t = useTranslations("EcommerceDashboard");
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <WelcomeBlock>
          <div className="max-w-[180px] relative z-10">
            <h4 className="text-xl font-medium text-primary-foreground dark:text-default-900 mb-2">
              <span className="block font-normal"> {t("widget_title")}</span>
              <span className="block">Mr. Naoual</span>
            </h4>
            <p className="text-sm text-primary-foreground dark:text-default-900 font-normal">
              {"Welcome Admin !"}
            </p>
          </div>
          <Image
            src="/images/all-img/widget-bg-2.png"
            width={400}
            height={150}
            priority
            alt="Description of the image"
            className="absolute top-0 start-0 w-full h-full object-cover rounded-md"
          />
        </WelcomeBlock>
        <StatusBlock
          title={"Total Clients"}
          total="3,564"
          iconWrapperClass="bg-info/10"
          chartColor="#00EBFF"
          icon={<ShoppingCart className="w-5 h-5  text-info" />}
        />
        <StatusBlock
             title={"Available staff"}
          total="564"
          icon={<Box className="w-5 h-5 text-warning" />}
          iconWrapperClass="bg-warning/10"
          chartColor="#FB8F65"
        />
        <StatusBlock
 title={"Avaible materail"}
          total="+5.0%"
          icon={<TrendingUp className="w-5 h-5 text-primary" />}
          iconWrapperClass="bg-primary/10"
          chartColor="#2563eb"
        />
      </div>
      {/* <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-8">
          <Card>
            <CardContent className="pt-5">
              <RevinueBarChart height={420} />
            </CardContent>
          </Card>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Card>
            <CardHeader className="flex flex-row items-center gap-1">
              <CardTitle className="flex-1">{t("statistics")}</CardTitle>
              <DashboardDropdown />
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2  gap-5">
                <div className="col-span-2 md:col-span-1">
                  <OrdersBlock
                    title={t("orders")}
                    total="123k"
                    chartColor="#f1595c"
                    className="border-none shadow-none bg-default-50 "
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <OrdersBlock
                    title={t("profit")}
                    total="123k"
                    chartColor="#4669fa"
                    chartType="line"
                    percentageContent={
                      <span className="text-primary">+2.5%</span>
                    }
                    className="border-none shadow-none bg-default-50 col-span-2 md:col-span-1"
                  />
                </div>
                <div className="col-span-2">
                  <EarningBlock
                    title={t("earnings")}
                    total="$12,335.00"
                    percentage="+08%"
                    className="col-span-2 border-none shadow-none bg-default-50"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div> */}
      <div className="grid lg:grid-cols-1 grid-cols-1 gap-5">
        
        <Card>
          <CardHeader className="flex flex-row items-center gap-1">
            <CardTitle className="flex-1">
              {t("recent_order_table_title")}
            </CardTitle>
            <DashboardDropdown />
          </CardHeader>
          <CardContent className="px-0">
            <RecentOrderTable />
          </CardContent>
        </Card>
      </div>
      
    </div>
  );
};

export default EcommercePage;
