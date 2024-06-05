import { OrganizationList } from "@clerk/nextjs";
export default function CreateOrganizationPage(){
    return(
        <OrganizationList
            // hidepersonal
            // afterSelectOrganiztionUrl = "/organization/:id"
            // afterCreateOrganiztionUrl = "/organization/:id"
        />
    );
};
