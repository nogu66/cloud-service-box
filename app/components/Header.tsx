import Link from "next/link";

const Header = () => {
	const isLoggingIn = true;

	return (
		<header className=" py-5">
			<div className="container mx-auto flex justify-between">
				<h1 className="text-black">
					<Link href="/">クラウドサービスBox</Link>
				</h1>
				<ul className="flex gap-3">
					<li>
						{isLoggingIn ? (
							// ログイン中の場合の要素
							<Link href="/mypage" className="text-black">
								マイページ
							</Link>
						) : (
							// ログインしていない場合の要素
							<Link href="/login" className="text-black">
								ログイン
							</Link>
						)}
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
