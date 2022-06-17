<template>
    <div class="container">
        <div class="section animate__animated animate__fadeInTopRight">
            <div class="section-title">
                <h2>Curriculum</h2>
            </div>
            <div class="row">
                <div class="col-md-4 col-12 estudios animate__animated animate__fadeInDown">
                    <h2>Estudios Cursados</h2>
                    <h4>Primario</h4>
                    <ul>
                        <li>Escuela Basica Nro: 562 Don Angel Talavera</li>
                    </ul>
                    <h4>Secundario</h4>
                    <ul>
                        <li>Col. Nacional Maria Auxiliadora</li>
                    </ul>
                    <h4>Terciaria-Universidad</h4>
                    <ul>
                        <li>Universidad Politecnica y Artistica (UPAP) 5º año</li>
                    </ul>
                    <h4>Otros Estudios</h4>
                    <ul>
                        <li>Curso de Base de Datos SQL SERVER</li>
                        <li>Curso de Javascript Basico</li>
                        <li>Curso de VueJs</li>
                        <li>Curso de HTML</li>
                        <li>Curso de CSS</li>
                        <li>Curso de C#</li>
                    </ul>
                    <h4>Experiencia Laboral</h4> 
                    <ul>
                        <li>Actualmente en la Plata S.R.L (9 meses) </li><br>
                    </ul> <br>                 
                </div>
            </div>
        </div>
    </div><br>
</template>
<script>

</script>
<style scoped>
    .section{
        padding: 20px;
        margin-top: 5%;
        background: black;
        font-family: sans-serif;
        height: 600px;
    }
    .section h1{
        color: aliceblue;
    }
    .section-title h2{
        font-family: "Poppins" sans-serif;
        font-size: 14px;
        font-weight: 500;
        margin: 0 0 20px 0;
        color: #aaa;
        letter-spacing: 2px;
        text-transform: uppercase;
    }
    .section-title h2::after{
        content: "";
        width: 80px;
        height: 1px;
        background: #18d26e;
        margin: 4px 10px;
        display: inline-block;
        font-family: "Poppins" sans-serif;
    }
    .estudios h2{
        font-family: "Poppins" sans-serif;
        margin-left: 5px;
    }
    .estudios h4{
        color: #18d26e;
        margin-left: 20px;
        font-family: sans-serif;
    }
    .estudios li{
        color: aliceblue;
    }
</style>