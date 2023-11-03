function App() {
	return (
		<>
			<h1 className="text-3xl mb-3 text-slate-800">
				Playground for Tailwind Workshop
			</h1>
			<p>
				<a href="https://tailwind-workshop.vercel.app/introduction">
					workshop notes
				</a>
			</p>
			<p>Welcome to this site.</p>
			<button>Click here</button>
			<hr />
			<img className="animate-pulse" src="http://placekitten.com/200/200"/>
			<hr/>
			<main className="grid h-[40rem] w-screen grid-cols-[1fr_6fr] grid-rows-[1fr_6fr_1fr]">
				<header className="bg-red-300 col-span-2">header</header>
				<nav className="bg-green-300">nav</nav>
				<section className="bg-yellow-300">section</section>
				<footer className="bg-blue-200 col-span-2">footer</footer>
			</main>
			<details className="rounded-t-md w-72 border-2 border-slate-200 bg-slate-200 px-4 py-2 shadow-md group cursor-pointer select-none mt-6">
				<summary className="group-open:mb-3">Open for more information</summary>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere accusamus ullam ducimus maxime veniam, fuga cupiditate similique quae recusandae. Quod aliquid perspiciatis dolores. Optio repellat earum quae velit modi illum.
			</details>
			<hr />
			<div className="container h-36 bg-teal-100 sm:bg-black md:bg-orange-500 lg:bg-blue-500 xl:bg-green-300"></div>
			<hr />
			<div className="mx-auto my-10 max-w-[500px] columns-3 space-y-4">
				<img src="http://placekitten.com/200/300"/>
				<img src="http://placekitten.com/250/300"/>
				<img src="http://placekitten.com/200/250"/>
				<img src="http://placekitten.com/100/300"/>
				<img src="http://placekitten.com/200/300"/>
				<img src="http://placekitten.com/200/300"/>
				<img src="http://placekitten.com/200/300"/>
				<img src="http://placekitten.com/200/300"/>
				<img src="http://placekitten.com/200/300"/>
			</div>
			<hr />
			
		</>
	);
}

export default App;
