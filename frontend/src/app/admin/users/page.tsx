import UsersNotice from "@/components/admin/users/UsersNotice";
import AdminSubHeader from "@/layouts/admin/AdminSubHeader";
import StatisticUserCards from "@/components/admin/users/StatisticUserCards";
import UserActions from "@/components/admin/users/UserActions";

import UsersClient from "@/components/admin/users/UsersClient";

async function getUsersData() {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    return { title: "Users" };
}

async function Users() {
    const data = await getUsersData();
    const titlePage = "danh sách thành viên";

    return (
        <div>
            {/* Page Breadcrumb */}
            <AdminSubHeader titlePage={titlePage} />

            {/* Main Content */}
            <div className="p-6 w-full flex flex-col gap-6">
                {/* Statistic Cards */}
                <StatisticUserCards />

                {/* Notice */}
                <UsersNotice />

                {/* User Actions */}
                <UserActions />

                <UsersClient />
            </div>
        </div>
    );
}

export default Users;