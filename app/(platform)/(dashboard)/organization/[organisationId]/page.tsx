const OrganizationIdPage = () => {
    const { userId, orgId } = auth();
    return (
        <div>
            Organisation: {orgId}
        </div>
    );
};
export default OrganizationIdPage;