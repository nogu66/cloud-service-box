const Page = async ({ params }: { params: { id: string } }) => {
	return <div>Categories {params.id} Page</div>;
};

export default Page;
