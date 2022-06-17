<template>
    <div class="container">
        <div class="section animate__animated animate__fadeInTopRight">
            <div class="section-title">
               <h2>Información</h2>
            </div>
            <div class="row">
                <div class="col-md-5 col-12">
                    <div>
                        <img src="@/assets/imgdesa.png" class="imgdesa" />
                    </div>
                </div>
                <div class="col-md-3 col-12">
                    <div class="datosPersonales">
                        <h2><strong>Desarrollador Web</strong></h2>
                        <p>MI INFORMACION PERSONAL</p>
                        <ul>
                            <li><i class="bi bi-chevron-compact-right"></i><strong>Fecha de Nacimiento:</strong> <span> 08/09/1998</span> </li>
                             <li><i class="bi bi-chevron-compact-right"></i><strong>Ciudad:</strong> <span> Piribebuy</span> </li>
                            <li><i class="bi bi-chevron-compact-right"></i><strong>Edad:</strong> <span> 23</span> </li>
                            <li><i class="bi bi-chevron-compact-right"></i><strong>Profesion:</strong> <span> Estudiante</span> </li>
                            <li><i class="bi bi-chevron-compact-right"></i><strong>Email:</strong> <span> denisjoelbenitez@gmail.com</span> </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-3 col-12 redes">
                        <p>REDES SOCIALES</p>
                    <div class="d-flex justify-content-center">
                        <!-- <img src="@/assets/face.png" class="imgredes" /> -->
                        <router-link class="active" to="/"><img src="@/assets/face.png" class="imgredes"/></router-link>
                        <router-link class="active" to="/"><img src="@/assets/instagram-logo.png" class="imgredes"/></router-link>
                        <router-link class="active" to="/"><img src="@/assets/whatsapp-icon.png" class="imgredes"/></router-link>
                    </div>
                </div>
            </div><br>
            <div class="section-title">
                <h2>Habilidades</h2>
            </div><br>
            <div class="habilidades">
                <div class="row">
                    <div class="col-md-3 col-12">
                            <p>Html</p>
                    <div class="progress" style="height: 10px">
                            <div class="progress-bar" role="progressbar" style="width: 100%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100%</div>
                        </div>
                    </div>
                    <div class="col-md-3 col-12">
                            <p>Bootstrap 5</p>
                            <div class="progress" style="height: 10px">
                                <div class="progress-bar" role="progressbar" style="width: 100%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100%</div>
                            </div>
                        </div>
                        <div class="col-md-3 col-12">
                            <p>Css</p>
                            <div class="progress" style="height: 10px">
                                <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
                            </div>
                        </div>
                        <div class="col-md-3 col-12">
                            <p>Javascript</p>
                            <div class="progress" style="height: 10px">
                                <div class="progress-bar" role="progressbar" style="width: 30%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">30%</div>
                            </div>
                        </div>
                    <div>

                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 col-12">
                            <p>Sql Server</p>
                    <div class="progress" style="height: 10px">
                            <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
                        </div>
                    </div>
                    <div class="col-md-3 col-12">
                            <p>Asp.Net Core</p>
                            <div class="progress" style="height: 10px">
                                <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
                            </div>
                        </div>
                        <div class="col-md-3 col-12">
                            <p>C#</p>
                            <div class="progress" style="height: 10px">
                                <div class="progress-bar" role="progressbar" style="width: 30%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">30%</div>
                            </div>
                        </div>
                        <div class="col-md-3 col-12">
                            <p>Vue Js 3</p>
                            <div class="progress" style="height: 10px">
                                <div class="progress-bar" role="progressbar" style="width: 30%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">30%</div>
                            </div>
                        </div>
                    <div>

                    </div>
                </div>            
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .section{
        margin-top: 5%;
        padding: 20px;
        background: black;

    }
    .section h5{
        color: aliceblue;
        margin-left: 20px;
    }
    .section-title h2{
        font-size: 14px;
        font-weight: 500;
        padding: 0;
        line-height: 1px;
        margin: 0 0 20px 0;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #aaaa;
        font-family: "Poppins", sans-serif;
    }
    .section-title h2::after{
        content: "";
        width: 70px;
        height: 1px;
        display: inline-block;
        background: #4ceb95;
        margin: 4px 10px;
    }
    .imgdesa{
        margin-left: 5%;
        width: 370px;
        height: 250px;
    }
    .redes p{
        font-family: "Poppins" sans-serif;
        font-weight: 500;
        margin-top: 18%;
        text-align: center;
        color: #aaaa;
       
    }
    .imgredes{
        width: 30px;
        height: 30px;
        margin-left: 20px;
        border-radius: 10px;
    }
    .datosPersonales{
        margin-top: 2%;
        text-align: center;
    }
    .datosPersonales ul{
        list-style: none;
        padding: 0;
    }
    .datosPersonales ul li{
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        color: aliceblue;
    }
    .datosPersonales ul i{
        font-size: 16px;
        margin-right: 5px;
        color: #18d26e;
        line-height: 0;
    }
    .datosPersonales ul strong{
        margin-right: 10px;
    }
    .datosPersonales p{
        color: #aaaa;
    }
    .section h5 ::after{
        content: "";
        width: 120px;
        height: 1px;
        display: inline-block;
        background: #18d26e;
        margin: 4px 10px;
    }
    .habilidades{
        color: aliceblue;
    }
</style>