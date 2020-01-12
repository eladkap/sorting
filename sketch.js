var vector;
var control;

var btnSort;
var btnReset;
var btnStop;
var btnGenerate;

var sliderArraySize;
var selectorSorting;

var sorter;


function setup() {
	createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
	background(GRAY3);
	frameRate(FPS);
	setButtons();
	setSliders();
	setSelectors();
	setVector();
	setControl();
}

function draw() {
	background(GRAY3);
	//vector.update();
	vector.draw();
	control.draw();
}

function setControl(){
	control = new Control();
}

function setVector(){
	vector = new Vector(VECTOR_POS_X, VECTOR_POS_Y, VECTOR_WIDTH, sliderArraySize.value());
}

function setButton(pos, label, action){
	let btn = createButton(label);
	btn.position(pos.x, pos.y);
	btn.mousePressed(action);
	return btn;
}

function setButtons(){
	btnSort = setButton(createVector(SCREEN_WIDTH * 0.9, HEADER_HEIGHT / 2), 'Sort', runSort);
	btnStop = setButton(createVector(SCREEN_WIDTH * 0.8, HEADER_HEIGHT / 2), 'Stop', stopSort);
	btnGenerate = setButton(createVector(SCREEN_WIDTH * 0.1, HEADER_HEIGHT / 2), 'Generate Array', generateArray);
}

function setSlider(pos, minValue, maxValue, value, step, inputAction){
	let slider = createSlider(minValue, maxValue,value, step);
	slider.position(pos.x, pos.y);
	slider.input(inputAction);
	return slider;
}

function setSliders(){
	sliderArraySize = setSlider(createVector(SCREEN_WIDTH * 0.4, HEADER_HEIGHT / 2), 4, MAX_VALUE, 8, 1, setVector);
}

function setSelector(pos, options, changeAction){
	let sel = createSelect();
	sel.position(pos.x, pos.y);
	for (let option of options){
		sel.option(option);
	}
	sel.changed(changeAction);
	return sel;
}

function setSelectors(){
	selectorSorting = setSelector(createVector(SCREEN_WIDTH * 0.6, HEADER_HEIGHT / 2), SORTING_TYPES, setSorter);
}

function setSorter(){
	if (selectorSorting.value() == 'BubbleSort'){
		sorter = new BubbleSorter();
	}
	else if (selectorSorting.value() == 'MaxSort'){
		//sorter = new MaxSorter();
	}
	else if (selectorSorting.value() == 'HeapSort'){
		//sorter = new HeapSorter();
	}
	else if (selectorSorting.value() == 'QuickSort'){
		//sorter = new QuickSorter();
	}
	else if (selectorSorting.value() == 'MergeSort'){
		//sorter = new MergeSorter();
	}
}

function runSort(){

}

function stopSort(){
	if (sorter.isRunning){
		noLoop();
		sorter.setRunning(false);
	}
}

function generateArray(){
	setVector();
}

function startBubbleSortSimulation(){
	vector.startBubbleSort();
	console.log(vector.isBubbleSortRunning);
}

function startMergeSortSimulation(){
	vector.startMergeSort();
	console.log(vector.isMergeSortRunning);
}

function reset(){
	vector.reset();
	checks = 0;
	console.log(vector.isBubbleSortRunning);
}

function shuffleVector(){
	vector.shuffle();
	vector.show();
}
