import { Observable } from "tns-core-modules/data/observable";

export class HelloWorldModel extends Observable {
    public message: string;
    html: string = `
        <script type="text/javascript">
        sas_tmstp=Math.round(Math.random()*10000000000);sas_masterflag=1;
        function sasmobile(sas_pageid,sas_formatid,sas_target) {
        if (sas_masterflag==1) {sas_masterflag=0;sas_master='M';} else {sas_master='S';};
        document.write('<scr'+'ipt src="http://www5.smartadserver.com/call2/pubmj/'+sas_pageid+'/'+sas_formatid+'/'+sas_master+'/'+sas_tmstp+'/'+escape(sas_target)+'?"></scr'+'ipt>');
        }function sascc(sas_imageid,sas_pageid) {
        img=new Image();
        img.src='https://www5.smartadserver.com/h/mcp?imgid='+sas_imageid+'&pgid='+sas_pageid+'&uid=[uid]&tmstp='+sas_tmstp+'&tgt=[targeting]';
        }</script>
        <script type="text/javascript">
            sas_pageid='206187/892507';	// Página : ReporteIndigo_Android/inicio
            sas_formatid=63178;		// Formato : Indigo App (Box Banner 2) Android  300x250
            sas_target='';			// Segmentación
            sasmobile(sas_pageid,sas_formatid,sas_target);
            </script>
            <noscript>
            <a href="http://www5.smartadserver.com/call2/pubjumpmi/206187/892507/63178/S/[timestamp]/?" target="_blank">
            <img src="http://www5.smartadserver.com/call2/pubmi/206187/892507/63178/S/[timestamp]/?" border="0" alt="" /></a>
            </noscript>
    `;

    constructor() {
        super();
    }
}
