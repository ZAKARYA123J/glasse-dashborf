"use client"
import { useEffect, useState } from "react";
import DashboardDropdown from "@/components/dashboard-dropdown";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { Eye, SquarePen, Trash2 } from "lucide-react";
import Link from "next/link";
interface Campaign {
  id: string;
  valeur: string; 
}

const CrmPage: React.FC = () => {
  const t = useTranslations("CrmDashboard");
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch("https://ocean-dashbord-elzu.vercel.app/api/surface"); // Replace with your API URL
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data: Campaign[] = await response.json();
        setCampaigns(data);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  if (loading) {
    return <p>{t("loading")}</p>; // Add a translation key for "loading"
  }

  if (error) {
    return <p>{t("error", { message: error })}</p>; // Add a translation key for "error"
  }

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-10 lg:col-span-8 space-y-5">
          <Card>
            <CardHeader className="flex-row gap-3">
              <CardTitle className="flex-1">{"Surface"}</CardTitle>
              <DashboardDropdown />
            </CardHeader>
            <CardContent>
              <ul className="divide-y divide-default-100 dark:divide-default-300">
              <li className="text-xs font-semibold uppercase text-default-700  py-2.5 px-2">
         <div className="flex justify-between">
          <span>ID</span>
         <span>Valeur</span>
         <span>
          Actions
         </span>
      </div>
       </li>
                {campaigns.map((item, i) => (
                  <li
                    key={`campaign-${i}`}
                    className="first:text-xs text-sm text-default-600 py-2.5 px-2 first:uppercase"
                  >
                    <div className="flex justify-between">
                      <span>{item.id}</span>
                      <span>{item.valeur}</span>
                      <span>
                      <Link href={`/en/app/}`} className='flex items-center '>
        <SquarePen className="w-4 h-4 me-1" />
        Edit
    </Link>
    <Link href={`/`} className='flex items-center '>
                            <Eye className="w-4 h-4 me-1" />
                            View
                        </Link>
    <Link href={`/`} className='flex items-center '>
                            <Trash2 className="w-4 h-4 me-1" />
                            Delete
                        </Link>
                      </span>
                      
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CrmPage;
