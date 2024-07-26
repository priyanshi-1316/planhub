/* makes the URL to display the right organization page according to the url we entered instead of displaying the current organization */
"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useOrganizationList } from "@clerk/nextjs";

export const OrgControl = () => {
    const params = useParams();
    const {setActive} = useOrganizationList();

    useEffect(() => {
        if(!setActive) return;
        setActive({
            organization: params.organizationId as string,
        });

    }, [setActive, params.organizationId])
    return null;
};