
function App() {

	const createDigit = () => {
		const digits = [];
		for(let i = 1;i < 10;i++){
			
		}
	}

	return (
		<div className="App">
			<div className="calculator">
				<div className="display">
					<span>(0)</span>0
				</div>
				<div className="operators">
					<button>+</button>
					<button>-</button>
					<button>*</button>
					<button>/</button>

					<button>DEL</button>

				</div>
				<div className="digit">
					<button>0</button>
					<button>.</button>
					<button>=</button>

				</div>
			</div>
		</div>
	);
}

export default App;
