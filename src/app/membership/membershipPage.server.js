// MembershipPage.server.js
import { fetchProfileAction } from "@/actions";
import Membership from "@/components/membership";
import { currentUser } from "@clerk/nextjs/server";

async function MembershipPage() {
  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id);
  if (!profileInfo) {
    // Redirect to the onboarding page on the server side
    return {
      redirect: {
        destination: "/onboard",
        permanent: false,
      },
    };
  }

  return <Membership profileInfo={profileInfo} />;
}

export default MembershipPage;
