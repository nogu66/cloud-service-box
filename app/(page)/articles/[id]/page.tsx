const Page = async ({ params }: { params: { id: string } }) => {
	return <div>Article {params.id} Page</div>;
};

export default Page;
