var vector;
var control;

var btnSort;
var btnReset;
var btnStop;
var btnGenerate;

var sliderArraySize;
var selectorSorting;

var sorter;
var fps = MAX_FPS;


function setup() {
	createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
	background(GRAY3);
	frameRate(fps);
	setButtons();
	setSliders();
	setSelectors();
	setVector();
	setControl();
	setSorter();
}

function draw() {
	background(GRAY3);
	control.draw();
	sorter.run();
	vector.draw();
}

function setControl(){
	control = new Control();
}

function setVector(){
	vector = new Vector(VECTOR_POS_X, VECTOR_POS_Y, VECTOR_WIDTH, sliderArraySize.value());
	fps = Math.ceil(vector.length() / MAX_ELEMENTS_NUM *  MAX_FPS);
	frameRate(fps);
}

function setButton(pos, label, action){
	let btn = createButton(label);
	btn.position(pos.x, pos.y);
	btn.mousePressed(action);
	return btn;
}

function setButtons(){
	btnSort = setButton(createVector(SCREEN_WIDTH * 0.7, HEADER_HEIGHT / 2), 'Sort', runSort);
	btnStop = setButton(createVector(SCREEN_WIDTH * 0.6, HEADER_HEIGHT / 2), 'Stop', stopSort);
	btnGenerate = setButton(createVector(SCREEN_WIDTH * 0.1, HEADER_HEIGHT / 2), 'Generate Array', generateArray);
	setEnabled(btnStop, false);
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
	selectorSorting = setSelector(createVector(SCREEN_WIDTH * 0.4, HEADER_HEIGHT / 2), SORTING_TYPES, setSorter);
}

function setSorter(){
	if (selectorSorting.value() == 'BubbleSort'){
		sorter = new BubbleSorter(vector);
	}
	else if (selectorSorting.value() == 'MaxSort'){
		//sorter = new MaxSorter(vector);
	}
	else if (selectorSorting.value() == 'HeapSort'){
		//sorter = new HeapSorter(vector);
	}
	else if (selectorSorting.value() == 'QuickSort'){
		//sorter = new QuickSorter(vector);
	}
	else if (selectorSorting.value() == 'MergeSort'){
		//sorter = new MergeSorter(vector);
	}
}

function runSort(){
	print('sort');
	setSorter();
	sorter.setVector(vector);
	sorter.start();
	loop();
	setEnabled(btnSort, false);
	setEnabled(btnStop, true);
	setEnabled(sliderArraySize, false);
	setEnabled(btnGenerate, false);
}

function stopSort(){
	print('stop');
	noLoop();
	sorter.stop();
	setEnabled(btnSort, true);
	setEnabled(btnStop, false);
}

function generateArray(){
	print('generate array');
	setVector();
}
