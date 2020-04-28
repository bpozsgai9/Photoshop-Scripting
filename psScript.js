alert('Szia Barni;)\nMa is milyen helyes vagy!', 'Photoshop message', );

//https://www.youtube.com/watch?v=LxxqxEVYfVc
//title nevű group megfogása
//app.activeDocument a jelenlegi dokument, olyan mint a document.getElementById();
//az itteni dolgok már előre létre lettek hozva egy alap dokumentumban, különben példányosítani kellene
//layerSets rétegek
app.activeDocumnet.layerSets.getByName('title');
//első layer
var titleLayer = titleGroup.layers[0];
//szöveg rajta
titleLayer.textItem.contents = 'Próba text';


//jpeg mentése
function saveJpeg(name){
	var doc = app.activeDocument;

	//new File() osztály léterhoz egy új fájlt
	//kimenet heyle a doc.path
	var file = new File(doc.path + '/' + name + '.jpg');

	var opts = new JPEGSaveOptions(); //jpeg beállítás módosító osztály
	opts.quality = 10; //magas

	//file-> menti, opts-> beállítja, true-> dokumentációba utána kell nézni :(
	doc.saveAs(file, opts, true);
}

saveJpeg('elso_proba_file');


//json olvasása

//nincs külön olvasója, extensiont kell letölteni :(

//json2.js github-on fenn van, main script mellé kell rakni
//ha megvan, felülre majd ezt:

#include json2.js

//majd a saveJpeg() függvény felé
//ez is felülre kerülhet és a titleLayer.textItem.contents = obj.title; lesz

var obj = loadJson('lessons.json'); //ezt majd létre kell hozni 
/*
{
	"title": "ps script"
}

*/
//alert(obj.a); -> teszt

function loadJson(relPath){
	//beolvasás az előzőhöz képest kicsit máshogy
	var script = new File($.fileName);
	var jsonFile = new File(script.path + '/' + relPath);

	jsonFile.open('r');
	var str = jsonFile.read();
	jsonFile.close();

	return JSON.pare(str);

}