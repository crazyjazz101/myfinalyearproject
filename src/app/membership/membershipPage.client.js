// MembershipPage.client.js
import { useRouter } from "next/navigation";
import { fetchProfileAction } from "@/actions";
import Membership from "@/components/membership";
import { currentUser } from "@clerk/nextjs/server";

async function MembershipPage() {
  const router = useRouter();
  const user = await currentUser();
  const profileInfo = await fetchProfileAction(user?.id);
  if (!profileInfo) router.push("/onboard");

  return <Membership profileInfo={profileInfo} />;
}

export default MembershipPage;
