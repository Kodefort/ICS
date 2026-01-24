import { auth } from "@/auth";
import SignInView from "../../../components/auth/SignInView";
import AdmissionController from "../../../components/admissions/AdmissionController";

export default async function AdmissionPage() {
    const session = await auth();

    if (!session || !session.user) {
        return <SignInView />;
    }

    return <AdmissionController user={session.user} />;
}
