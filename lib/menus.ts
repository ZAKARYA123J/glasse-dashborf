

export type SubChildren = {
  href: string;
  label: string;
  active: boolean;
  children?: SubChildren[];
};
export type Submenu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus?: Submenu[];
  children?: SubChildren[];
};

export type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
  id: string;
};

export type Group = {
  groupLabel: string;
  menus: Menu[];
  id: string;
};

export function getMenuList(pathname: string, t: any): Group[] {

  return [
    {
      groupLabel: t("dashboard"),
      id: "dashboard",
      menus: [
        {
          id: "dashboard",
          href: "/dashboard/analytics",
          label: t("dashboard"),
          active: pathname.includes("/dashboard"),
          icon: "heroicons-outline:home",
          submenus: [
            {
              href: "/dashboard/analytics",
              label: t("analytics"),
              active: pathname === "/dashboard/analytics",
              icon: "heroicons:arrow-trending-up",
              children: [],
            },
            {
              href: "/dashboard/dash-ecom",
              label: t("ecommerce"),
              active: pathname === "/dashboard/dash-ecom",
              icon: "heroicons:shopping-cart",
              children: [],
            },
            {
              href: "/dashboard/project",
              label: t("project"),
              active: pathname === "/dashboard/project",
              icon: "heroicons:document",
              children: [],
            },
            {
              href: "/dashboard/crm",
              label: t("crm"),
              active: pathname === "/dashboard/crm",
              icon: "heroicons:share",
              children: [],
            },
            {
              href: "/dashboard/banking",
              label: t("banking"),
              active: pathname === "/dashboard/banking",
              icon: "heroicons:credit-card",
              children: [],
            },
          ],
        },
      ],
    },
    {
      groupLabel: "",
      id: "changelog",
      menus: [
        {
          id: "changelog",
          href: "/changelog",
          label: t("changelog"),
          active: pathname.includes("/changelog"),
          icon: "heroicons:arrow-trending-up",
          submenus: [],
        },
      ],
    },
    {
      groupLabel: t("apps"),
      id: "app",
      menus: [
        {
          id: "chat",
          href: "/app/chat",
          label: t("chat"),
          active: pathname.includes("/app/chat"),
          icon: "heroicons-outline:chat",
          submenus: [],
        },
        {
          id: "email",
          href: "/app/email",
          label: t("email"),
          active: pathname.includes("/app/email"),
          icon: "heroicons-outline:mail",
          submenus: [],
        },
        {
          id: "kanban",
          href: "/app/kanban",
          label: t("kanban"),
          active: pathname.includes("/app/kanban"),
          icon: "heroicons-outline:view-boards",
          submenus: [],
        },
        {
          id: "calendar",
          href: "/app/calendar",
          label: t("calendar"),
          active:pathname.includes("/app/calendar"),
          icon: "heroicons-outline:calendar",
          submenus: [],
        },
        {
          id: "todo",
          href: "/app/todo",
          label: t("todo"),
          active:pathname.includes("/app/todo"),
          icon: "heroicons-outline:clipboard-check",
          submenus: [],
        },
        {
          id: "projects",
          href: "/app/projects",
          label: t("projects"),
          active: pathname.includes("/app/projects"),
          icon: "heroicons-outline:document",
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "",
      id: "ecommerce",
      menus: [
        {
          id: "ecommerce",
          href: "/ecommerce/frontend",
          label: t("ecommerce"),
          active: pathname.includes("/ecommerce"),
          icon: "heroicons-outline:shopping-bag",
          submenus: [
            {
              href: "/ecommerce/frontend",
              label: t("userApp"),
              active: pathname.includes("/ecommerce/frontend"),
              icon: "heroicons-outline:user",
              children: [
                {
                  href: "/ecommerce/frontend",
                  label: t("products"),
                  active: pathname === "/ecommerce/frontend",
                },
                {
                  href: "/ecommerce/frontend/c06d48bf-7f35-4789-b71e-d80fee5b430t",
                  label: t("productDetails"),
                  active:
                    pathname ===
                    "/ecommerce/frontend/c06d48bf-7f35-4789-b71e-d80fee5b430t",
                },
                {
                  href: "/ecommerce/frontend/checkout/cart",
                  label: t("cart"),
                  active: pathname === "/ecommerce/frontend/checkout/cart",
                },
                {
                  href: "/ecommerce/frontend/wishlist",
                  label: t("wishlist"),
                  active: pathname === "/ecommerce/frontend/wishlist",
                },
              ],
            },
            {
              href: "/ecommerce/backend",
              label: t("adminApp"),
              active: pathname.includes("/ecommerce/backend"),
              icon: "heroicons-outline:user-circle",
              children: [
                {
                  href: "/ecommerce/backend/add-product",
                  label: t("addProduct"),
                  active: pathname === "/ecommerce/backend/add-product",
                },
                {
                  href: "/ecommerce/backend/customer-list",
                  label: t("customerList"),
                  active: pathname === "/ecommerce/backend/customer-list",
                },
                {
                  href: "/ecommerce/backend/edit-product",
                  label: t("editProduct"),
                  active: pathname === "/ecommerce/backend/edit-product",
                },
                {
                  href: "/ecommerce/backend/invoice",
                  label: t("invoice"),
                  active: pathname === "/ecommerce/backend/invoice",
                },
                {
                  href: "/ecommerce/backend/order-details",
                  label: t("orderDetails"),
                  active: pathname === "/ecommerce/backend/order-details",
                },
                {
                  href: "/ecommerce/backend/order-list",
                  label: t("orderList"),
                  active: pathname === "/ecommerce/backend/order-list",
                },
                {
                  href: "/ecommerce/backend/purchase-list",
                  label: t("purchaseList"),
                  active: pathname === "/ecommerce/backend/purchase-list",
                },
                {
                  href: "/ecommerce/backend/sellers",
                  label: t("sellers"),
                  active: pathname === "/ecommerce/backend/sellers",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      groupLabel: t("pages"),
      id: "auth",
      menus: [
        {
          id: "auth",
          href: "/auth/login",
          label: t("authentication"),
          active: pathname.includes("/auth"),
          icon: "heroicons-outline:lock-closed",
          submenus: [
            {
              href: "/auth/login",
              label: t("signInOne"),
              active: pathname === "/auth/login",
              icon: "",
              children: [],
            },
            {
              href: "/auth/login2",
              label: t("signInTwo"),
              active: pathname === "/auth/login2",
              icon: "",
              children: [],
            },
            {
              href: "/auth/login3",
              label: t("signInThree"),
              active: pathname === "/auth/login3",
              icon: "",
              children: [],
            },
            {
              href: "/auth/register",
              label: t("signUpOne"),
              active: pathname === "/auth/register",
              icon: "",
              children: [],
            },
            {
              href: "/auth/register2",
              label: t("signUpTwo"),
              active: pathname === "/auth/register2",
              icon: "",
              children: [],
            },
            {
              href: "/auth/register3",
              label: t("signUpThree"),
              active: pathname === "/auth/register3",
              icon: "",
              children: [],
            },
            {
              href: "/auth/forgot-password",
              label: t("forgotPasswordOne"),
              active: pathname === "/auth/forgot-password",
              icon: "",
              children: [],
            },
            {
              href: "/auth/forgot-password2",
              label: t("forgotPasswordTwo"),
              active: pathname === "/auth/forgot-password2",
              icon: "",
              children: [],
            },
            {
              href: "/auth/forgot-password3",
              label: t("forgotPasswordThree"),
              active: pathname === "/auth/forgot-password3",
              icon: "",
              children: [],
            },
            {
              href: "/auth/look-screen",
              label: t("lockScreenOne"),
              active: pathname === "/auth/look-screen",
              icon: "",
              children: [],
            },
            {
              href: "/auth/look-screen",
              label: t("lockScreenTwo"),
              active: pathname === "/auth/look-screen2",
              icon: "",
              children: [],
            },
            {
              href: "/auth/look-screen3",
              label: t("lockScreenThree"),
              active: pathname === "/auth/look-screen3",
              icon: "",
              children: [],
            },
          ],
        },
      ],
    },
    {
      groupLabel: "",
      id: "utility",
      menus: [
        {
          id: "utility",
          href: "/utility/blank-page",
          label: t("utility"),
          active: pathname.includes("/utility"),
          icon: "heroicons-outline:view-boards",
          submenus: [
            {
              href: "/utility/blank-page",
              label: t("blankPage"),
              active: pathname === "/utility/blank-page",
              icon: "heroicons:document",
              children: [],
            },
            {
              href: "/utility/blog",
              label: t("blog"),
              active: pathname === "/utility/blog",
              icon: "heroicons:square-2-stack",
              children: [],
            },
            {
              href: "/utility/faq",
              label: t("faq"),
              active: pathname === "/utility/faq",
              icon: "heroicons:question-mark-circle",
              children: [],
            },
            {
              href: "/utility/invoice",
              label: t("invoice"),
              active: pathname === "/utility/invoice",
              icon: "heroicons:clipboard-document-list",
              children: [],
            },
            {
              href: "/utility/pricing",
              label: t("pricing"),
              active: pathname === "/utility/pricing",
              icon: "heroicons:currency-dollar",
              children: [],
            },
            {
              href: "/utility/profile",
              label: t("profile"),
              active: pathname === "/utility/profile",
              icon: "heroicons:user-circle",
              children: [],
            },
            {
              href: "/utility/settings",
              label: t("settings"),
              active: pathname === "/utility/settings",
              icon: "heroicons:wrench-screwdriver",
              children: [],
            },
          ],
        },
      ],
    },
    {
      groupLabel: t("elements"),
      id: "components",
      menus: [
        {
          id: "components",
          href: "/components/avatar",
          label: t("components"),
          active: pathname.includes("/components"),
          icon: "heroicons-outline:collection",
          submenus: [
            {
              href: "/components/avatar",
              label: t("avatar"),
              active: pathname === "/components/avatar",
              icon: "",
              children: [],
            },
            {
              href: "/components/alert",
              label: t("alert"),
              active: pathname === "/components/alert",
              icon: "",
              children: [],
            },
            {
              href: "/components/alert-dialog",
              label: t("alertDialog"),
              active: pathname === "/components/alert-dialog",
              icon: "",
              children: [],
            },
            {
              href: "/components/accordion",
              label: t("accordion"),
              active: pathname === "/components/accordion",
              icon: "",
              children: [],
            },
            {
              href: "/components/badge",
              label: t("badge"),
              active: pathname === "/components/badge",
              icon: "",
              children: [],
            },
            {
              href: "/components/breadcrumb",
              label: t("breadcrumb"),
              active: pathname === "/components/breadcrumb",
              icon: "",
              children: [],
            },
            {
              href: "/components/button",
              label: t("button"),
              active: pathname === "/components/button",
              icon: "",
              children: [],
            },
            {
              href: "/components/calendar",
              label: t("calendar"),
              active: pathname === "/components/calendar",
              icon: "",
              children: [],
            },
            {
              href: "/components/card",
              label: t("card"),
              active: pathname === "/components/card",
              icon: "",
              children: [],
            },
            {
              href: "/components/carousel",
              label: t("carousel"),
              active: pathname === "/components/carousel",
              icon: "",
              children: [],
            },
            {
              href: "/components/collapsible",
              label: t("collapsible"),
              active: pathname === "/components/collapsible",
              icon: "",
              children: [],
            },
            {
              href: "/components/context-menu",
              label: t("contextMenu"),
              active: pathname === "/components/context-menu",
              icon: "",
              children: [],
            },
            {
              href: "/components/dialog",
              label: t("dialog"),
              active: pathname === "/components/dialog",
              icon: "",
              children: [],
            },
            {
              href: "/components/drawer",
              label: t("drawer"),
              active: pathname === "/components/drawer",
              icon: "",
              children: [],
            },
            {
              href: "/components/dropdown",
              label: t("dropdown"),
              active: pathname === "/components/dropdown",
              icon: "",
              children: [],
            },
            {
              href: "/components/hover-card",
              label: t("hoverCard"),
              active: pathname === "/components/hover-card",
              icon: "",
              children: [],
            },
            {
              href: "/components/menu-bar",
              label: t("menuBar"),
              active: pathname === "/components/menu-bar",
              icon: "",
              children: [],
            },
            {
              href: "/components/navigation-menu",
              label: t("navigationMenu"),
              active: pathname === "/components/navigation-menu",
              icon: "",
              children: [],
            },
            {
              href: "/components/pagination",
              label: t("pagination"),
              active: pathname === "/components/pagination",
              icon: "",
              children: [],
            },
            {
              href: "/components/popover",
              label: t("popover"),
              active: pathname === "/components/popover",
              icon: "",
              children: [],
            },
            {
              href: "/components/progress",
              label: t("progress"),
              active: pathname === "/components/progress",
              icon: "",
              children: [],
            },
            {
              href: "/components/resizable",
              label: t("resizable"),
              active: pathname === "/components/resizable",
              icon: "",
              children: [],
            },
            {
              href: "/components/scroll-area",
              label: t("scrollArea"),
              active: pathname === "/components/scroll-area",
              icon: "",
              children: [],
            },
            {
              href: "/components/separator",
              label: t("separator"),
              active: pathname === "/components/separator",
              icon: "",
              children: [],
            },
            {
              href: "/components/sheet",
              label: t("sheet"),
              active: pathname === "/components/sheet",
              icon: "",
              children: [],
            },
            {
              href: "/components/skeleton",
              label: t("skeleton"),
              active: pathname === "/components/skeleton",
              icon: "",
              children: [],
            },
            {
              href: "/components/sonner",
              label: t("sonner"),
              active: pathname === "/components/sonner",
              icon: "",
              children: [],
            },
            {
              href: "/components/tabs",
              label: t("tabs"),
              active: pathname === "/components/tabs",
              icon: "",
              children: [],
            },
            {
              href: "/components/toast",
              label: t("toast"),
              active: pathname === "/components/toast",
              icon: "",
              children: [],
            },
            {
              href: "/components/toggle",
              label: t("toggle"),
              active: pathname === "/components/toggle",
              icon: "",
              children: [],
            },
            {
              href: "/components/tooltip",
              label: t("tooltip"),
              active: pathname === "/components/tooltip",
              icon: "",
              children: [],
            },
            {
              href: "/components/typography",
              label: t("typography"),
              active: pathname === "/components/typography",
              icon: "",
              children: [],
            },
            {
              href: "/components/colors",
              label: t("colors"),
              active: pathname === "/components/colors",
              icon: "",
              children: [],
            },
          ],
        },
      ],
    },
    {
      groupLabel: "",
      id: "forms",
      menus: [
        {
          id: "forms",
          href: "/forms/input",
          label: t("forms"),
          active: pathname.includes("/forms"),
          icon: "heroicons-outline:clipboard-list",
          submenus: [
            {
              href: "/forms/input",
              label: t("input"),
              active: pathname === "/forms/input",
              icon: "",
              children: [],
            },
            {
              href: "/forms/input-group",
              label: t("inputGroup"),
              active: pathname === "/forms/input-group",
              icon: "",
              children: [],
            },
            {
              href: "/forms/input-layout",
              label: t("inputLayout"),
              active: pathname === "/forms/input-layout",
              icon: "",
              children: [],
            },
            {
              href: "/forms/input-mask",
              label: t("inputMask"),
              active: pathname === "/forms/input-mask",
              icon: "",
              children: [],
            },
            {
              href: "/forms/input-otp",
              label: t("inputOtp"),
              active: pathname === "/forms/input-otp",
              icon: "",
              children: [],
            },
            {
              href: "/forms/input-file",
              label: t("inputFile"),
              active: pathname === "/forms/input-file",
              icon: "",
              children: []
            },
            {
              href: "/forms/form-validation",
              label: t("formValidation"),
              active: pathname === "/forms/form-validation",
              icon: "",
              children: [],
            },
            {
              href: "/forms/select",
              label: t("select"),
              active: pathname === "/forms/select",
              icon: "",
              children: [],
            },
            {
              href: "/forms/react-select",
              label: t("reactSelect"),
              active: pathname === "/forms/react-select",
              icon: "",
              children: [],
            },
            {
              href: "/forms/slider",
              label: t("slider"),
              active: pathname === "/forms/slider",
              icon: "",
              children: [],
            },
            {
              href: "/forms/switch",
              label: t("switch"),
              active: pathname === "/forms/switch",
              icon: "",
              children: [],
            },
            {
              href: "/forms/radio",
              label: t("radio"),
              active: pathname === "/forms/radio",
              icon: "",
              children: [],
            },
            {
              href: "/forms/checkbox",
              label: t("checkbox"),
              active: pathname === "/forms/checkbox",
              icon: "",
              children: [],
            },

            {
              href: "/forms/combobox",
              label: t("combobox"),
              active: pathname === "/forms/combobox",
              icon: "",
              children: [],
            },
            {
              href: "/forms/command",
              label: t("command"),
              active: pathname === "/forms/command",
              icon: "",
              children: [],
            },
          ],
        },
      ],
    },
    {
      groupLabel: "",
      id: "table",
      menus: [
        {
          id: "table",
          href: "/table/basic-table",
          label: t("table"),
          active: pathname.includes("/table"),
          icon: "heroicons:table-cells",
          submenus: [
            {
              href: "/table/basic-table",
              label: t("basicTable"),
              active: pathname === "/table/basic-table",
              icon: "",
              children: [],
            },
            {
              href: "/table/react-table",
              label: t("reactTable"),
              active: pathname === "/table/react-table",
              icon: "",
              children: [],
            },
          ],
        },
      ],
    },
    {
      groupLabel: "",
      id: "blocks",
      menus: [
        {
          id: "blocks",
          href: "/blocks/basic-widget",
          label: t("widget"),
          active: pathname.includes("/blocks"),
          icon: "heroicons-outline:view-grid-add",
          submenus: [
            {
              href: "/blocks/basic-widget",
              label: t("basicWidget"),
              active: pathname === "/blocks/basic-widget",
              icon: "",
              children: [],
            },
            {
              href: "/blocks/statistic-widget",
              label: t("statisticsWidget"),
              active: pathname === "/blocks/statistic-widget",
              icon: "",
              children: [],
            },
          ],
        },
      ],
    },
    {
      groupLabel: "",
      id: "charts",
      menus: [
        {
          id: "charts",
          href: "/charts/appex-charts/charts-appex-area",
          label: t("chart"),
          active: pathname.includes("/charts"),
          icon: "heroicons:chart-bar",
          submenus: [
            {
              href: "/charts/appex-charts/charts-appex-area",
              label: t("appexCharts"),
              active: pathname.includes("/charts/appex-charts"),
              icon: "heroicons:chart-bar",
              children: [
                {
                  href: "/charts/appex-charts/charts-appex-area",
                  label: t("areaCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-area"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-bar",
                  label: t("barCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-bar"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-boxplot",
                  label: t("boxplotCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-boxplot"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-bubble",
                  label: t("bubbleCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-bubble"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-candlestick",
                  label: t("candlestickCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-candlestick"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-column",
                  label: t("columnCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-column"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-combo",
                  label: t("comboCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-combo"
                  ),
                  children: [],
                },

                {
                  href: "/charts/appex-charts/charts-appex-funnel",
                  label: t("funnelCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-funnel"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-heatmap",
                  label: t("heatmapCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-heatmap"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-line",
                  label: t("lineCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-line"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-pie",
                  label: t("pieCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-pie"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-polararea",
                  label: t("ploarareaCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-polararea"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-radar",
                  label: t("radarCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-radar"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-radialbars",
                  label: t("radialbarCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-radialbars"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-range",
                  label: t("rangeCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-range"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-scatter",
                  label: t("scatterCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-scatter"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-timeline",
                  label: t("timelineCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-timeline"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-treemap",
                  label: t("treemapCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-treemap"
                  ),
                  children: [],
                },
              ],
            },
            {
              href: "/charts/rechart/charts-rechart-area",
              label: t("rechart"),
              active: pathname.includes("/charts/rechart"),
              icon: "heroicons:chart-bar",
              children: [
                {
                  href: "/charts/rechart/charts-rechart-area",
                  label: t("areaCharts"),
                  active: pathname.includes(
                    "/charts/rechart/charts-rechart-area"
                  ),
                  children: [],
                },
                {
                  href: "/charts/rechart/charts-rechart-bar",
                  label: t("barCharts"),
                  active: pathname.includes(
                    "/charts/rechart/charts-rechart-bar"
                  ),
                  children: [],
                },
                {
                  href: "/charts/rechart/charts-rechart-composed",
                  label: t("composedCharts"),
                  active: pathname.includes(
                    "/charts/rechart/charts-rechart-composed"
                  ),
                  children: [],
                },
                {
                  href: "/charts/rechart/charts-rechart-line",
                  label: t("lineCharts"),
                  active: pathname.includes(
                    "/charts/rechart/charts-rechart-line"
                  ),
                  children: [],
                },
                {
                  href: "/charts/rechart/charts-rechart-pie",
                  label: t("pieCharts"),
                  active: pathname.includes(
                    "/charts/rechart/charts-rechart-pie"
                  ),
                  children: [],
                },
                {
                  href: "/charts/rechart/charts-rechart-radar",
                  label: t("radarCharts"),
                  active: pathname.includes(
                    "/charts/rechart/charts-rechart-radar"
                  ),
                  children: [],
                },
                {
                  href: "/charts/rechart/charts-rechart-radialbar",
                  label: t("radialbarCharts"),
                  active: pathname.includes(
                    "/charts/rechart/charts-rechart-radialbar"
                  ),
                  children: [],
                },
                {
                  href: "/charts/rechart/charts-rechart-scatter",
                  label: t("scatterCharts"),
                  active: pathname.includes(
                    "/charts/rechart/charts-rechart-scatter"
                  ),
                  children: [],
                },
                {
                  href: "/charts/rechart/charts-rechart-treemap",
                  label: t("treemapCharts"),
                  active: pathname.includes(
                    "/charts/rechart/charts-rechart-treemap"
                  ),
                  children: [],
                },
              ],
            },
            {
              href: "/charts/chart-js/charts-chartjs-area",
              label: t("chartJs"),
              active: pathname.includes("/charts/chart-js"),
              icon: "heroicons:chart-bar",
              children: [
                {
                  href: "/charts/chart-js/charts-chartjs-area",
                  label: t("areaCharts"),
                  active: pathname.includes(
                    "/charts/chart-js/charts-chartjs-area"
                  ),
                  children: [],
                },
                {
                  href: "/charts/chart-js/charts-chartjs-bar",
                  label: t("barCharts"),
                  active: pathname.includes(
                    "/charts/chart-js/charts-chartjs-bar"
                  ),
                  children: [],
                },
                {
                  href: "/charts/chart-js/charts-chartjs-line",
                  label: t("lineCharts"),
                  active: pathname.includes(
                    "/charts/chart-js/charts-chartjs-line"
                  ),
                  children: [],
                },
                {
                  href: "/charts/chart-js/charts-chartjs-animations",
                  label: t("animationCharts"),
                  active: pathname.includes(
                    "/charts/chart-js/charts-chartjs-animations"
                  ),
                  children: [],
                },
                {
                  href: "/charts/chart-js/charts-chartjs-legend",
                  label: t("legendCharts"),
                  active: pathname.includes(
                    "/charts/chart-js/charts-chartjs-legend"
                  ),
                  children: [],
                },
                {
                  href: "/charts/chart-js/charts-chartjs-scaleoptions",
                  label: t("scaleOptionCharts"),
                  active: pathname.includes(
                    "/charts/chart-js/charts-chartjs-scaleoptions"
                  ),
                  children: [],
                },
                {
                  href: "/charts/chart-js/charts-chartjs-scales",
                  label: t("scaleCharts"),
                  active: pathname.includes(
                    "/charts/chart-js/charts-chartjs-scales"
                  ),
                  children: [],
                },
                {
                  href: "/charts/chart-js/charts-chartjs-scriptable",
                  label: t("scriptableCharts"),
                  active: pathname.includes(
                    "/charts/chart-js/charts-chartjs-scriptable"
                  ),
                  children: [],
                },
                {
                  href: "/charts/chart-js/charts-chartjs-title",
                  label: t("titleCharts"),
                  active: pathname.includes(
                    "/charts/chart-js/charts-chartjs-title"
                  ),
                  children: [],
                },
                {
                  href: "/charts/chart-js/charts-chartjs-tooltip",
                  label: t("tooltipChart"),
                  active: pathname.includes(
                    "/charts/chart-js/charts-chartjs-tooltip"
                  ),
                  children: [],
                },
                {
                  href: "/charts/chart-js/charts-chartjs-other",
                  label: t("otherCharts"),
                  active: pathname.includes(
                    "/charts/chart-js/charts-chartjs-other"
                  ),
                  children: [],
                },
              ],
            }
          ]
        }
      ]
    },
    {
      groupLabel: "",
      id: "maps",
      menus: [
        {
          id: "maps",
          href: "/maps/maps-leaflet",
          label: t("maps"),
          active: pathname.includes("/maps/maps-leaflet"),
          icon: "heroicons-outline:map",
          submenus: [
            {
              href: "/maps/maps-leaflet",
              label: t("mapsLeaflet"),
              active: pathname.includes("/maps/maps-leaflet"),
              icon: "",
              children: [],
            },
            {
              href: "/maps/maps-vector",
              label: t("mapsVector"),
              active: pathname.includes("/maps/maps-vector"),
              icon: "",
              children: [],
            },
          ],
        },
      ],
    },
    {
      groupLabel: "",
      id: "icons",
      menus: [
        {
          id: "icons",
          href: "/icons",
          label: t("icons"),
          active: pathname.includes("/icons"),
          icon: "heroicons-outline:emoji-happy",
          submenus: [],
        },
      ],
    },
  ];
}
export function getHorizontalMenuList(pathname: string, t: any): Group[] {
  return [
    {
      groupLabel: t("dashboard"),
      id: "dashboard",
      menus: [
        {
          id: "dashboard",
          href: "/dashboard/analytics",
          label: t("dashboard"),
          active: pathname.includes("/dashboard"),
          icon: "heroicons-outline:home",
          submenus: [
            {
              href: "/dashboard/analytics",
              label: t("analytics"),
              active: pathname === "/dashboard/analytics",
              icon: "heroicons:arrow-trending-up",
              children: [],
            },
            {
              href: "/dashboard/dash-ecom",
              label: t("ecommerce"),
              active: pathname === "/dashboard/dash-ecom",
              icon: "heroicons:shopping-cart",
              children: [],
            },
            {
              href: "/dashboard/project",
              label: t("project"),
              active: pathname === "/dashboard/project",
              icon: "heroicons:document",
              children: [],
            },
            {
              href: "/dashboard/crm",
              label: t("crm"),
              active: pathname === "/dashboard/crm",
              icon: "heroicons:share",
              children: [],
            },
            {
              href: "/dashboard/banking",
              label: t("banking"),
              active: pathname === "/dashboard/banking",
              icon: "heroicons:credit-card",
              children: [],
            },
          ],
        },
      ],
    },

    {
      groupLabel: t("apps"),
      id: "app",
      menus: [
        {
          id: "app",
          href: "/app/chat",
          label: t("apps"),
          active: pathname.includes("/app/chat"),
          icon: "heroicons-outline:chat",
          submenus: [
            {
              href: "/app/chat",
              label: t("chat"),
              active: pathname === "/app/chat",
              icon: "heroicons-outline:chat",
              children: [],
            },
            {
              href: "/app/email",
              label: t("email"),
              active: pathname === "/app/email",
              icon: "heroicons-outline:mail",
              children: [],
            },
            {
              href: "/app/kanban",
              label: t("kanban"),
              active: pathname === "/app/kanban",
              icon: "heroicons-outline:view-boards",
              children: [],
            },
            {
              href: "/app/calendar",
              label: t("calendar"),
              active: pathname === "/app/calendar",
              icon: "heroicons-outline:calendar",
              children: [],
            },
            {
              href: "/app/todo",
              label: t("todo"),
              active: pathname === "/app/todo",
              icon: "heroicons-outline:clipboard-check",
              children: [],
            },
            {
              href: "/app/projects",
              label: t("projects"),
              active: pathname === "/app/projects",
              icon: "heroicons-outline:document",
              children: [],
            },
          ],
        },
      ],
    },
    {
      groupLabel: t("ecommerce"),
      id: "ecommerce",
      menus: [
        {
          id: "ecommerce",
          href: "/ecommerce/frontend",
          label: t("ecommerce"),
          active: pathname.includes("/ecommerce"),
          icon: "heroicons-outline:shopping-bag",
          submenus: [
            {
              href: "/ecommerce/frontend",
              label: t("userApp"),
              active: pathname === "/ecommerce/frontend",
              icon: "heroicons-outline:user",
              children: [
                {
                  href: "/ecommerce/frontend",
                  label: t("products"),
                  active: pathname === "/ecommerce/frontend",
                },
                {
                  href: "/ecommerce/frontend/c06d48bf-7f35-4789-b71e-d80fee5b430t",
                  label: t("productDetails"),
                  active:
                    pathname ===
                    "/ecommerce/frontend/c06d48bf-7f35-4789-b71e-d80fee5b430t",
                },
                {
                  href: "/ecommerce/frontend/checkout/cart",
                  label: t("cart"),
                  active: pathname === "/ecommerce/frontend/checkout/cart",
                },
                {
                  href: "/ecommerce/frontend/wishlist",
                  label: t("wishlist"),
                  active: pathname === "/ecommerce/frontend/wishlist",
                },
              ],
            },
            {
              href: "/ecommerce/backend",
              label: t("adminApp"),
              active: pathname === "/ecommerce/backend",
              icon: "heroicons-outline:user-circle",
              children: [
                {
                  href: "/ecommerce/backend/add-product",
                  label: t("addProduct"),
                  active: pathname === "/ecommerce/backend/add-product",
                },
                {
                  href: "/ecommerce/backend/customer-list",
                  label: t("customerList"),
                  active: pathname === "/ecommerce/backend/customer-list",
                },
                {
                  href: "/ecommerce/backend/edit-product",
                  label: t("editProduct"),
                  active: pathname === "/ecommerce/backend/edit-product",
                },
                {
                  href: "/ecommerce/backend/invoice",
                  label: t("invoice"),
                  active: pathname === "/ecommerce/backend/invoice",
                },
                {
                  href: "/ecommerce/backend/order-details",
                  label: t("orderDetails"),
                  active: pathname === "/ecommerce/backend/order-details",
                },
                {
                  href: "/ecommerce/backend/order-list",
                  label: t("orderList"),
                  active: pathname === "/ecommerce/backend/order-list",
                },
                {
                  href: "/ecommerce/backend/purchase-list",
                  label: t("purchaseList"),
                  active: pathname === "/ecommerce/backend/purchase-list",
                },
                {
                  href: "/ecommerce/backend/sellers",
                  label: t("sellers"),
                  active: pathname === "/ecommerce/backend/sellers",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      groupLabel: t("pages"),
      id: "auth",
      menus: [
        {
          id: "auth",
          href: "/auth/login",
          label: t("authentication"),
          active: pathname.includes("/auth"),
          icon: "heroicons-outline:lock-closed",
          submenus: [
            {
              href: "/auth/login",
              label: t("signInOne"),
              active: pathname === "/auth/login",
              icon: "",
              children: [],
            },
            {
              href: "/auth/login2",
              label: t("signInTwo"),
              active: pathname === "/auth/login2",
              icon: "",
              children: [],
            },
            {
              href: "/auth/login3",
              label: t("signInThree"),
              active: pathname === "/auth/login3",
              icon: "",
              children: [],
            },
            {
              href: "/auth/register",
              label: t("signUpOne"),
              active: pathname === "/auth/register",
              icon: "",
              children: [],
            },
            {
              href: "/auth/register2",
              label: t("signUpTwo"),
              active: pathname === "/auth/register2",
              icon: "",
              children: [],
            },
            {
              href: "/auth/register3",
              label: t("signUpThree"),
              active: pathname === "/auth/register3",
              icon: "",
              children: [],
            },
            {
              href: "/auth/forgot-password",
              label: t("forgotPasswordOne"),
              active: pathname === "/auth/forgot-password",
              icon: "",
              children: [],
            },
            {
              href: "/auth/forgot-password2",
              label: t("forgotPasswordTwo"),
              active: pathname === "/auth/forgot-password2",
              icon: "",
              children: [],
            },
            {
              href: "/auth/forgot-password3",
              label: t("forgotPasswordThree"),
              active: pathname === "/auth/forgot-password3",
              icon: "",
              children: [],
            },
            {
              href: "/auth/look-screen",
              label: t("lockScreenOne"),
              active: pathname === "/auth/look-screen",
              icon: "",
              children: [],
            },
            {
              href: "/auth/look-screen",
              label: t("lockScreenTwo"),
              active: pathname === "/auth/look-screen2",
              icon: "",
              children: [],
            },
            {
              href: "/auth/look-screen3",
              label: t("lockScreenThree"),
              active: pathname === "/auth/look-screen3",
              icon: "",
              children: [],
            },
          ],
        },
      ],
    },
    {
      groupLabel: "",
      id: "utility",
      menus: [
        {
          id: "utility",
          href: "/utility/blank-page",
          label: t("utility"),
          active: pathname.includes("/utility"),
          icon: "heroicons-outline:view-boards",
          submenus: [
            {
              href: "/utility/blank-page",
              label: t("blankPage"),
              active: pathname === "/utility/blank-page",
              icon: "heroicons:document",
              children: [],
            },
            {
              href: "/utility/blog",
              label: t("blog"),
              active: pathname === "/utility/blog",
              icon: "heroicons:square-2-stack",
              children: [],
            },
            {
              href: "/utility/faq",
              label: t("faq"),
              active: pathname === "/utility/faq",
              icon: "heroicons:question-mark-circle",
              children: [],
            },
            {
              href: "/utility/invoice",
              label: t("invoice"),
              active: pathname === "/utility/invoice",
              icon: "heroicons:clipboard-document-list",
              children: [],
            },
            {
              href: "/utility/pricing",
              label: t("pricing"),
              active: pathname === "/utility/pricing",
              icon: "heroicons:currency-dollar",
              children: [],
            },
            {
              href: "/utility/profile",
              label: t("profile"),
              active: pathname === "/utility/profile",
              icon: "heroicons:user-circle",
              children: [],
            },
            {
              href: "/utility/settings",
              label: t("settings"),
              active: pathname === "/utility/settings",
              icon: "heroicons:wrench-screwdriver",
              children: [],
            },
            {
              href: "/changelog",
              label: t("changelog"),
              active: pathname.includes("/changelog"),
              icon: "heroicons:arrow-trending-up",
              children: [],
            },
            {
              href: "/blocks/basic-widget",
              label: t("basicWidget"),
              active: pathname === "/blocks/basic-widget",
              icon: "heroicons-outline:home",
              children: [],
            },
            {
              href: "/blocks/statistic-widget",
              label: t("statisticsWidget"),
              active: pathname === "/blocks/statistic-widget",
              icon: "heroicons-outline:home",
              children: [],
            },
            {
              href: "/icons",
              label: t("icons"),
              active: pathname.includes("/icons"),
              icon: "heroicons-outline:emoji-happy",
              children: [],
            },
          ],
        },
      ],
    },
    {
      groupLabel: t("elements"),
      id: "components",
      menus: [
        {
          id: "components",
          href: "/components/avatar",
          label: t("components"),
          active: pathname.includes("/components"),
          icon: "heroicons-outline:collection",
          submenus: [
            {
              href: "/components/avatar",
              label: t("avatar"),
              active: pathname === "/components/avatar",
              icon: "",
              children: [],
            },
            {
              href: "/components/alert",
              label: t("alert"),
              active: pathname === "/components/alert",
              icon: "",
              children: [],
            },
            {
              href: "/components/alert-dialog",
              label: t("alertDialog"),
              active: pathname === "/components/alert-dialog",
              icon: "",
              children: [],
            },
            {
              href: "/components/accordion",
              label: t("accordion"),
              active: pathname === "/components/accordion",
              icon: "",
              children: [],
            },
            {
              href: "/components/badge",
              label: t("badge"),
              active: pathname === "/components/badge",
              icon: "",
              children: [],
            },
            {
              href: "/components/breadcrumb",
              label: t("breadcrumb"),
              active: pathname === "/components/breadcrumb",
              icon: "",
              children: [],
            },
            {
              href: "/components/button",
              label: t("button"),
              active: pathname === "/components/button",
              icon: "",
              children: [],
            },
            {
              href: "/components/calendar",
              label: t("calendar"),
              active: pathname === "/components/calendar",
              icon: "",
              children: [],
            },
            {
              href: "/components/card",
              label: t("card"),
              active: pathname === "/components/card",
              icon: "",
              children: [],
            },
            {
              href: "/components/carousel",
              label: t("carousel"),
              active: pathname === "/components/carousel",
              icon: "",
              children: [],
            },
            {
              href: "/components/collapsible",
              label: t("collapsible"),
              active: pathname === "/components/collapsible",
              icon: "",
              children: [],
            },
            {
              href: "/components/context-menu",
              label: t("contextMenu"),
              active: pathname === "/components/context-menu",
              icon: "",
              children: [],
            },
            {
              href: "/components/dialog",
              label: t("dialog"),
              active: pathname === "/components/dialog",
              icon: "",
              children: [],
            },
            {
              href: "/components/drawer",
              label: t("drawer"),
              active: pathname === "/components/drawer",
              icon: "",
              children: [],
            },
            {
              href: "/components/dropdown",
              label: t("dropdown"),
              active: pathname === "/components/dropdown",
              icon: "",
              children: [],
            },
            {
              href: "/components/hover-card",
              label: t("hoverCard"),
              active: pathname === "/components/hover-card",
              icon: "",
              children: [],
            },
            {
              href: "/components/menu-bar",
              label: t("menuBar"),
              active: pathname === "/components/menu-bar",
              icon: "",
              children: [],
            },
            {
              href: "/components/navigation-menu",
              label: t("navigationMenu"),
              active: pathname === "/components/navigation-menu",
              icon: "",
              children: [],
            },
            {
              href: "/components/pagination",
              label: t("pagination"),
              active: pathname === "/components/pagination",
              icon: "",
              children: [],
            },
            {
              href: "/components/popover",
              label: t("popover"),
              active: pathname === "/components/popover",
              icon: "",
              children: [],
            },
            {
              href: "/components/progress",
              label: t("progress"),
              active: pathname === "/components/progress",
              icon: "",
              children: [],
            },
            {
              href: "/components/resizable",
              label: t("resizable"),
              active: pathname === "/components/resizable",
              icon: "",
              children: [],
            },
            {
              href: "/components/scroll-area",
              label: t("scrollArea"),
              active: pathname === "/components/scroll-area",
              icon: "",
              children: [],
            },
            {
              href: "/components/separator",
              label: t("separator"),
              active: pathname === "/components/separator",
              icon: "",
              children: [],
            },
            {
              href: "/components/sheet",
              label: t("sheet"),
              active: pathname === "/components/sheet",
              icon: "",
              children: [],
            },
            {
              href: "/components/skeleton",
              label: t("skeleton"),
              active: pathname === "/components/skeleton",
              icon: "",
              children: [],
            },
            {
              href: "/components/sonner",
              label: t("sonner"),
              active: pathname === "/components/sonner",
              icon: "",
              children: [],
            },
            {
              href: "/components/tabs",
              label: t("tabs"),
              active: pathname === "/components/tabs",
              icon: "",
              children: [],
            },
            {
              href: "/components/toast",
              label: t("toast"),
              active: pathname === "/components/toast",
              icon: "",
              children: [],
            },
            {
              href: "/components/toggle",
              label: t("toggle"),
              active: pathname === "/components/toggle",
              icon: "",
              children: [],
            },
            {
              href: "/components/tooltip",
              label: t("tooltip"),
              active: pathname === "/components/tooltip",
              icon: "",
              children: [],
            },
            {
              href: "/components/typography",
              label: t("typography"),
              active: pathname === "/components/typography",
              icon: "",
              children: [],
            },
            {
              href: "/components/colors",
              label: t("colors"),
              active: pathname === "/components/colors",
              icon: "",
              children: [],
            },
          ],
        },
      ],
    },
    {
      groupLabel: "",
      id: "forms",
      menus: [
        {
          id: "forms",
          href: "/forms/input",
          label: t("forms"),
          active: pathname.includes("/forms"),
          icon: "heroicons-outline:clipboard-list",
         submenus: [
            {
              href: "/forms/input",
              label: t("input"),
              active: pathname === "/forms/input",
              icon: "",
              children: [],
            },
            {
              href: "/forms/input-group",
              label: t("inputGroup"),
              active: pathname === "/forms/input-group",
              icon: "",
              children: [],
            },
            {
              href: "/forms/input-layout",
              label: t("inputLayout"),
              active: pathname === "/forms/input-layout",
              icon: "",
              children: [],
            },
            {
              href: "/forms/input-mask",
              label: t("inputMask"),
              active: pathname === "/forms/input-mask",
              icon: "",
              children: [],
            },
            {
              href: "/forms/input-otp",
              label: t("inputOtp"),
              active: pathname === "/forms/input-otp",
              icon: "",
              children: [],
            },
            {
              href: "/forms/input-file",
              label: t("inputFile"),
              active: pathname === "/forms/input-file",
              icon: "",
              children: [],
            },
            {
              href: "/forms/form-validation",
              label: t("formValidation"),
              active: pathname === "/forms/form-validation",
              icon: "",
              children: [],
            },
            {
              href: "/forms/select",
              label: t("select"),
              active: pathname === "/forms/select",
              icon: "",
              children: [],
            },
            {
              href: "/forms/react-select",
              label: t("reactSelect"),
              active: pathname === "/forms/react-select",
              icon: "",
              children: [],
            },
            {
              href: "/forms/slider",
              label: t("slider"),
              active: pathname === "/forms/slider",
              icon: "",
              children: [],
            },
            {
              href: "/forms/switch",
              label: t("switch"),
              active: pathname === "/forms/switch",
              icon: "",
              children: [],
            },
            {
              href: "/forms/radio",
              label: t("radio"),
              active: pathname === "/forms/radio",
              icon: "",
              children: [],
            },
            {
              href: "/forms/checkbox",
              label: t("checkbox"),
              active: pathname === "/forms/checkbox",
              icon: "",
              children: [],
            },

            {
              href: "/forms/combobox",
              label: t("combobox"),
              active: pathname === "/forms/combobox",
              icon: "",
              children: [],
            },
            {
              href: "/forms/command",
              label: t("command"),
              active: pathname === "/forms/command",
              icon: "",
              children: [],
            },
          ],
        },
      ],
    },
    {
      groupLabel: "",
      id: "table",
      menus: [
        {
          id: "table",
          href: "/table/basic-table",
          label: t("table"),
          active: pathname.includes("/table"),
          icon: "heroicons:table-cells",
          submenus: [
            {
              href: "/table/basic-table",
              label: t("basicTable"),
              active: pathname === "/table/basic-table",
              icon: "",
              children: [],
            },
            {
              href: "/table/react-table",
              label: t("reactTable"),
              active: pathname === "/table/react-table",
              icon: "",
              children: [],
            },
          ],
        },
      ],
    },
    {
      groupLabel: "",
      id: "charts",
      menus: [
        {
          id: "charts",
          href: "/charts/appex-charts/charts-appex-area",
          label: t("chart"),
          active: pathname.includes("/charts"),
          icon: "heroicons:chart-bar",
          submenus: [
            {
              href: "/charts/appex-charts/charts-appex-area",
              label: t("appexCharts"),
              active: pathname.includes("/charts/appex-charts"),
              icon: "",
              children: [
                {
                  href: "/charts/appex-charts/charts-appex-area",
                  label: t("areaCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-area"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-bar",
                  label: t("barCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-bar"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-boxplot",
                  label: t("boxplotCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-boxplot"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-bubble",
                  label: t("bubbleCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-bubble"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-candlestick",
                  label: t("candlestickCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-candlestick"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-column",
                  label: t("columnCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-column"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-combo",
                  label: t("comboCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-combo"
                  ),
                  children: [],
                },

                {
                  href: "/charts/appex-charts/charts-appex-funnel",
                  label: t("funnelCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-funnel"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-heatmap",
                  label: t("heatmapCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-heatmap"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-line",
                  label: t("lineCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-line"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-pie",
                  label: t("pieCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-pie"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-polararea",
                  label: t("ploarareaCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-polararea"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-radar",
                  label: t("radarCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-radar"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-radialbars",
                  label: t("radialbarCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-radialbars"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-range",
                  label: t("rangeCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-range"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-scatter",
                  label: t("scatterCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-scatter"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-timeline",
                  label: t("timelineCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-timeline"
                  ),
                  children: [],
                },
                {
                  href: "/charts/appex-charts/charts-appex-treemap",
                  label: t("treemapCharts"),
                  active: pathname.includes(
                    "/charts/appex-charts/charts-appex-treemap"
                  ),
                  children: [],
                },
              ],
            },
            {
              href: "/charts/rechart/charts-rechart-area",
              label: t("rechart"),
              active: pathname.includes("/charts/rechart"),
              icon: "",
              children: [
                {
                  href: "/charts/rechart/charts-rechart-area",
                  label: t("areaCharts"),
                  active: pathname.includes(
                    "/charts/rechart/charts-rechart-area"
                  ),
                  children: [],
                },
                {
                  href: "/charts/rechart/charts-rechart-bar",
                  label: t("barCharts"),
                  active: pathname.includes(
                    "/charts/rechart/charts-rechart-bar"
                  ),
                  children: [],
                },
                {
                  href: "/charts/rechart/charts-rechart-composed",
                  label: t("composedCharts"),
                  active: pathname.includes(
                    "/charts/rechart/charts-rechart-composed"
                  ),
                  children: [],
                },
                {
                  href: "/charts/rechart/charts-rechart-line",
                  label: t("lineCharts"),
                  active: pathname.includes(
                    "/charts/rechart/charts-rechart-line"
                  ),
                  children: [],
                },
                {
                  href: "/charts/rechart/charts-rechart-pie",
                  label: t("pieCharts"),
                  active: pathname.includes(
                    "/charts/rechart/charts-rechart-pie"
                  ),
                  children: [],
                },
                {
                  href: "/charts/rechart/charts-rechart-radar",
                  label: t("radarCharts"),
                  active: pathname.includes(
                    "/charts/rechart/charts-rechart-radar"
                  ),
                  children: [],
                },
                {
                  href: "/charts/rechart/charts-rechart-radialbar",
                  label: t("radialbarCharts"),
                  active: pathname.includes(
                    "/charts/rechart/charts-rechart-radialbar"
                  ),
                  children: [],
                },
                {
                  href: "/charts/rechart/charts-rechart-scatter",
                  label: t("scatterCharts"),
                  active: pathname.includes(
                    "/charts/rechart/charts-rechart-scatter"
                  ),
                  children: [],
                },
                {
                  href: "/charts/rechart/charts-rechart-treemap",
                  label: t("treemapCharts"),
                  active: pathname.includes(
                    "/charts/rechart/charts-rechart-treemap"
                  ),
                  children: [],
                },
              ],
            },
            {
              href: "/charts/chart-js/charts-chartjs-area",
              label: t("chartJs"),
              active: pathname.includes("/charts/chart-js"),
              icon: "",
              children: [
                {
                  href: "/charts/chart-js/charts-chartjs-area",
                  label: t("areaCharts"),
                  active: pathname.includes(
                    "/charts/chart-js/charts-chartjs-area"
                  ),
                  children: [],
                },
                {
                  href: "/charts/chart-js/charts-chartjs-bar",
                  label: t("barCharts"),
                  active: pathname.includes(
                    "/charts/chart-js/charts-chartjs-bar"
                  ),
                  children: [],
                },
                {
                  href: "/charts/chart-js/charts-chartjs-line",
                  label: t("lineCharts"),
                  active: pathname.includes(
                    "/charts/chart-js/charts-chartjs-line"
                  ),
                  children: [],
                },
                {
                  href: "/charts/chart-js/charts-chartjs-animations",
                  label: t("animationCharts"),
                  active: pathname.includes(
                    "/charts/chart-js/charts-chartjs-animations"
                  ),
                  children: [],
                },
                {
                  href: "/charts/chart-js/charts-chartjs-legend",
                  label: t("legendCharts"),
                  active: pathname.includes(
                    "/charts/chart-js/charts-chartjs-legend"
                  ),
                  children: [],
                },
                {
                  href: "/charts/chart-js/charts-chartjs-scaleoptions",
                  label: t("scaleOptionCharts"),
                  active: pathname.includes(
                    "/charts/chart-js/charts-chartjs-scaleoptions"
                  ),
                  children: [],
                },
                {
                  href: "/charts/chart-js/charts-chartjs-scales",
                  label: t("scaleCharts"),
                  active: pathname.includes(
                    "/charts/chart-js/charts-chartjs-scales"
                  ),
                  children: [],
                },
                {
                  href: "/charts/chart-js/charts-chartjs-scriptable",
                  label: t("scriptableCharts"),
                  active: pathname.includes(
                    "/charts/chart-js/charts-chartjs-scriptable"
                  ),
                  children: [],
                },
                {
                  href: "/charts/chart-js/charts-chartjs-title",
                  label: t("titleCharts"),
                  active: pathname.includes(
                    "/charts/chart-js/charts-chartjs-title"
                  ),
                  children: [],
                },
                {
                  href: "/charts/chart-js/charts-chartjs-tooltip",
                  label: t("tooltipChart"),
                  active: pathname.includes(
                    "/charts/chart-js/charts-chartjs-tooltip"
                  ),
                  children: [],
                },
                {
                  href: "/charts/chart-js/charts-chartjs-other",
                  label: t("otherCharts"),
                  active: pathname.includes(
                    "/charts/chart-js/charts-chartjs-other"
                  ),
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      groupLabel: "",
      id: "maps",
      menus: [
        {
          id: "maps",
          href: "/maps/maps-leaflet",
          label: t("maps"),
          active: pathname.includes("/maps/maps-leaflet"),
          icon: "heroicons-outline:map",
          submenus: [
            {
              href: "/maps/maps-leaflet",
              label: t("mapsLeaflet"),
              active: pathname.includes("/maps/maps-leaflet"),
              icon: "",
              children: [],
            },
            {
              href: "/maps/maps-vector",
              label: t("mapsVector"),
              active: pathname.includes("/maps/maps-vector"),
              icon: "",
              children: [],
            },
          ],
        },
      ],
    },
    {
      groupLabel: "",
      id: "icons",
      menus: [],
    },
  ];
}


