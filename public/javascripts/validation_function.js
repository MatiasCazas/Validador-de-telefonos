var getJSON = require('get-json');
const num_geo = require('./numeracion_geografica_v2');
console.log()
function TelefonoArgentino(e){this.input=e,this.getData=telefono,this.getType=getTelephoneType,this.isValid=isValid,this.filterInt=filterInt(e),this.invalidChars=invalidChars,this.getGeoPolitc=getGeoPolitc}function telefono(){var e=function(e){return e.replace(/([\-\.\(\)\[\]\s\+]+)/g,"")}(this.input).match(/^(?:(?:(00)?(?:(\+?54)|(0)?)?(?:(9)?(((3894|3892|3891|3888|3887|3886|3885|3878|3877|3876|3873|3869|3868|3867|3865|3863|3862|3861|3858|3857|3856|3855|3854|3846|3845|3844|3843|3841|3838|3837|3835|3832|3827|3826|3825|3821|3786|3782|3781|3777|3775|3774|3773|3772|3758|3757|3756|3755|3754|3751|3743|3741|3735|3734|3731|3725|3721|3718|3716|3715|3711|3585|3584|3583|3582|3576|3575|3574|3573|3572|3571|3564|3563|3562|3549|3548|3547|3546|3544|3543|3542|3541|3537|3533|3532|3525|3524|3522|3521|3498|3497|3496|3493|3492|3491|3489|3487|3483|3482|3476|3472|3471|3469|3468|3467|3466|3465|3464|3463|3462|3460|3458|3456|3455|3454|3447|3446|3445|3444|3442|3438|3437|3436|3435|3409|3408|3407|3406|3405|3404|3402|3401|3400|3388|3387|3385|3382|3329|3327|2983|2982|2972|2966|2964|2963|2962|2954|2953|2952|2948|2946|2945|2942|2940|2936|2935|2934|2933|2932|2931|2929|2928|2927|2926|2925|2924|2923|2922|2921|2920|2903|2902|2901|2658|2657|2656|2655|2652|2651|2648|2647|2646|2626|2625|2624|2622|2478|2477|2475|2474|2473|2396|2395|2394|2393|2392|2358|2357|2356|2355|2354|2353|2352|2346|2345|2344|2343|2342|2338|2337|2336|2335|2334|2333|2331|2326|2325|2324|2323|2320|2317|2316|2314|2302|2297|2296|2292|2291|2286|2285|2284|2283|2281|2274|2273|2272|2271|2268|2267|2266|2265|2264|2262|2261|2257|2255|2254|2252|2246|2245|2244|2243|2242|2241|2229|2227|2226|2225|2224|2223|2221|2202)(15)?([\d]{6})|(388|387|385|383|381|380|379|376|370|364|362|358|353|351|348|345|343|342|341|336|299|298|297|294|291|280|266|264|263|261|260|249|237|236|230|223|221|220)(15)?([\d]{7})|(11)(15)?([\d]{8})|(15)([\d]{6})|(15)([\d]{7})|(15)([\d]{8})|([\d]{6,8}))|(0800|0810|0822|0823|0610|0611|0612|0609|0600|0747|0939|0605|0603)([\d]{7,8}))?)|(000|19|100|101|102|103|105|106|107|108|110|112|113|114|115|121|125|126|130|131|132|133|134|135|136|137|138|139|144|145|147|911|000)))$/);if(null!==e){var i=setData(e),t=getType(i);return!!t&&(i.input=this.input,i.type=t,i.format=numberFormat(i),i.htmlify=htmlify(i),i)}return!1}function filterInt(e){return re=/([^\d])/g,subst="",result=e.replace(re,subst),result}function invalidChars(){for(var e,i=/([^\d\-\(\)\[\]\s\+\.])/g,t=new Array;null!==(e=i.exec(this.input));)e.index===i.lastIndex&&i.lastIndex++,t.indexOf(e[0])<0&&t.push(e[0]);return t.length>0&&t}function setData(e){for(number_list=[9,15,12,21,17,19,22,24],i=0;i<=number_list.length-1;i++){if(void 0!==e[parseInt(number_list[i])]){t=e[parseInt(number_list[i])];break}var t=!1}for(mobile_prefix_list=[8,11,14,18,20],i=0;i<=mobile_prefix_list.length-1;i++){if(void 0!==e[parseInt(mobile_prefix_list[i])]){n=e[parseInt(mobile_prefix_list[i])];break}var n=!1}for(area_code_list=[13,10,7],i=0;i<=area_code_list.length-1;i++){if(void 0!==e[parseInt(area_code_list[i])]){r=e[parseInt(area_code_list[i])];break}var r=!1}return{filter_input:void 0!==e[0]&&e[0],international:void 0!==e[1]&&e[1],country:void 0!==e[2]&&e[2],national_call:void 0!==e[3]&&e[3],mobile:void 0!==e[4]&&e[4],special:void 0!==e[25]&&e[25],specific:void 0!==e[23]&&e[23],mobile_prefix:n,area_code:r,number:t}}function isValid(){return!!this.getData()}function getTelephoneType(){return this.getData().type}function getType(e){return(!e.mobile_prefix||!e.mobile)&&(e.special?type="special":e.specific&&7===e.number.length?type="specific":e.area_code&&e.area_code.length+e.number.length===10?type=e.mobile_prefix||e.mobile?"mobile":"landline":!e.area_code&&e.number.length>=6&&e.number.length<=8?type=e.mobile_prefix||e.mobile?"mobile":"landline":type=!1,type)}function cleanupNumberFormat(e){return e.replace(/(^\s*|\s(?=\s+)|\s*$)/g,"")}function numberFormat(e){if(!e.number)return e.filter_input;number=e.number.slice(0,e.number.length-4)+"-"+e.number.slice(-4),country=e.country?"+"+e.country:"",d=[];for(key in e)d[key]=e[key]?e[key]:"";return space=" ",formated_number=d.international+space+country+space+d.mobile+space+d.national_call+d.area_code+space+d.mobile_prefix+space+d.specific+space+number,cleanupNumberFormat(formated_number)}function htmlify(e){if(!e.number)return e.filter_input;number=e.number.slice(0,e.number.length-4)+"-"+e.number.slice(-4),number='<span class="number">'+number+"</span>",country=e.country?'<span class="country">+'+e.country+"</span>":"",d=[];for(key in e)d[key]=e[key]?'<span class="'+key+'">'+e[key]+"</span>":"";return space=" ",formated_number=d.international+space+country+space+d.mobile+space+d.national_call+d.area_code+space+d.mobile_prefix+space+d.specific+space+number,cleanupNumberFormat(formated_number)}function getGeoPolitc(e){var i=this,t=null;if(!i.getData().area_code)return!1;for(k in geo_politics)if(values=geo_politics[k],values.area_code===parseInt(i.getData().area_code)){t={provincia:values.province,ciudad:values.city,localidades:values.localidades};break}return t}var geo_politics;getJSON("https://firebasestorage.googleapis.com/v0/b/bossbot-44b7d.appspot.com/o/names_and_gender.json?alt=media&token=a2181eac-f56f-4934-8f58-fdafb73f2a75",function(e){geo_politics=e});

module.exports = {
	validate_telephone: validate_telephone
}

function validate_telephone(telephone){
	var t_data = new TelefonoArgentino(telephone);
	var validated_data;
	if(t_data.isValid()){
		validated_data = getGeopolitic(telephone, 4, t_data);
	}
	else{
		validated_data = validateInvalidTelephone(telephone, t_data);
	}
	return validated_data;
}

async function getGeopolitic(telephone, length_characters, t_data){
	var geo_politic_result = [];
	var tData = t_data.getData(), tType = t_data.getType(), tGeoPolitc = t_data.getGeoPolitc(), tIsValid = t_data.isValid(), tInvalidChars = t_data.invalidChars(), tFilterInt = t_data.filterInt;
	if(telephone == false) {
        await geo_politic_result.push({data: tData, type: tType, geopolitics: tGeoPolitc, isValid: tIsValid, invalidChars: tInvalidChars, filterInt: tFilterInt, TYPE: false, OPERADOR: false, SERVICIO: false, MODALIDAD: false, LOCALIDAD: false}); 
        return geo_politic_result
    }
	var telephone_substring = telephone.substring(0, telephone.length - length_characters);
	geo_politic_result = await num_geo.filter(numeracion_geografica => numeracion_geografica.INDICATIVO_BLOQUE == telephone_substring);
    if((geo_politic_result.length == 0 && length_characters == 1 )|| telephone == false){console.log("2"); return geo_politic_result.push({data: tData, geopolitics: tGeoPolitc, isValid: tIsValid, invalidChars: tInvalidChars, filterInt: tFilterInt, TYPE: false, OPERADOR: false, SERVICIO: false, MODALIDAD: false, LOCALIDAD: false});}
	else if(geo_politic_result.length != 0) {return [{data: tData, geopolitics: tGeoPolitc, isValid: tIsValid, invalidChars: tInvalidChars, filterInt: tFilterInt, TYPE: geo_politic_result[0].TYPE, OPERADOR: geo_politic_result[0].OPERADOR, SERVICIO: geo_politic_result[0].SERVICIO, MODALIDAD: geo_politic_result[0].MODALIDAD, LOCALIDAD: geo_politic_result[0].LOCALIDAD}];}
	else if(geo_politic_result.length == 0){ console.log("prefinal"); return getGeopolitic(telephone, (length_characters-1));}
	else{console.log("final"); return geo_politic_result.push({data: tData, type: tType, geopolitics: tGeoPolitc, isValid: tIsValid, invalidChars: tInvalidChars, filterInt: tFilterInt, TYPE: false, OPERADOR: false, SERVICIO: false, MODALIDAD: false, LOCALIDAD: false});}
}

function validateInvalidTelephone(telephone, t_data){
	var telephoneData = [];
	console.log(t_data.getData())
	var tData = t_data.getData() == false ? "No hay datos para un telefono invalido" : "return";
	var tType = t_data.getType() == undefined ? "No podemos mostrar el tipo de un telefono invalido" : "return";
	var tGeoPolitc = t_data.getGeoPolitc() == undefined ? "No podemos mostrar localizacion de un telefono invalido" : "return";
	var tIsValid = t_data.isValid() == false ? "Invalido" : "Valido";
	var tInvalidChars = t_data.invalidChars();
	var tFilterInt = t_data.filterInt;
	telephoneData.push({data: tData, type: tType, geopolitics: tGeoPolitc, isValid: tIsValid, invalidChars: tInvalidChars, filterInt: tFilterInt, INDICATIVO_BLOQUE: false, INDICATIVO: false, BLOQUE: false, OPERADOR: false, SERVICIO: false, MODALIDAD: false, LOCALIDAD: false});
	return telephoneData;
}