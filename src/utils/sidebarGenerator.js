import Link from "next/link";

export const sidebarGenerator = (items, pathname) => {
    return items?.map(item =>
        <li key={item.label} className={pathname == item.path ? "activeDashboard" : "inactiveDashboard"}>
            <Link href={item.path} className="flex justify-start items-center gap-4">
                {item?.icon}
                {item.label}
            </Link>
        </li>
    );
}