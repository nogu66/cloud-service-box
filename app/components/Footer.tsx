import Link from "next/link";

const Header = () => {
	return (
		<header className=" py-8">
			<div className="container mx-auto flex justify-between">
				<div></div>
				<ul className="flex gap-x-9">
					<li>
						<Link href="/privacy" className="text-black">
							プライバシーポリシー
						</Link>
						<span className="px-8"></span>
						<Link href="/" className="text-black">
							お問い合わせ
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
