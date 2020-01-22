var vector;
var control;

var btnSort;
var btnReset;
var btnGenerate;

var sliderArraySize;
var selectorSorting;

var sortAlgo;
var fps = FPS;
var delayInMilliSec = 100;


function setup() {
	createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
	background(GRAY3);
	frameRate(fps);
	setButtons();
	setSliders();
	setSelectors();
	setVector();
	setControl();
	setSortAlgo();
}

function draw() {
	background(GRAY3);
	control.draw();
	vector.draw();
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
	btnSort = setButton(createVector(SCREEN_WIDTH * 0.7, HEADER_HEIGHT / 2), 'Sort', runSort);
	btnGenerate = setButton(createVector(SCREEN_WIDTH * 0.1, HEADER_HEIGHT / 2), 'Generate Array', generateArray);
}

function setEnabled(btn, value){
	if (value){
		btn.removeAttribute('disabled');
	}
	else{
		btn.attribute('disabled', value);
	}
}

function setSlider(pos, minValue, maxValue, value, step, inputAction){
	let slider = createSlider(minValue, maxValue,value, step);
	slider.position(pos.x, pos.y);
	slider.input(inputAction);
	return slider;
}

function setSliders(){
	sliderArraySize = setSlider(createVector(SCREEN_WIDTH * 0.2, HEADER_HEIGHT / 2), 4, MAX_ELEMENTS_NUM, 8, 1, setVector);
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
	selectorSorting = setSelector(createVector(SCREEN_WIDTH * 0.4, HEADER_HEIGHT / 2), SORTING_TYPES, setSortAlgo);
}

function setSortAlgo(){
	sortAlgo = selectorSorting.value();
	console.log('Sorting algo set to ' + sortAlgo);
}

async function startSort(){
	console.log('sort');
	setEnabled(btnSort, false);
	setEnabled(sliderArraySize, false);
	setEnabled(btnGenerate, false);	

	if (sortAlgo == 'BubbleSort'){
		console.log('Run BubbleSort')
		await bubbleSort(vector);
	}
	else if (sortAlgo == 'QuickSort'){
		console.log('Run QuickSort')
		await quickSort(vector);
	}
}


function stopSort(){
	console.log('stop');
	noLoop();
	setEnabled(btnSort, true);
}

async function finishSort(){
	console.log('Sort finished.');
	setEnabled(btnSort, true);
	setEnabled(sliderArraySize, true);
	setEnabled(btnGenerate, true);
	markVecorSorted();
}

async function markVecorSorted(){
	for (let i = 0; i < vector.length(); i++){
		vector.arr[i].setBackcolor(GREEN);
		await sleep(delayInMilliSec);
	}
}

async function runSort(){
	await startSort();
	finishSort();
}

function generateArray(){
	print('generate array');
	setVector();
}
