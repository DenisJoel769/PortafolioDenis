<template>    
        <body>

            <!-- header Inicio del proyecto -->
           <header id="header" class="header">
               <div class="container">
                  <h1><router-link  class="title" to="/vista">Denis Joel Benitez</router-link></h1>
                  <h2 class="title1">Estudiante de la carrera de Ing. Informatica</h2>
               </div>

               <nav id="navbar" class="navbar">
                   <ul class="navbar_ul">
                       <!-- <li><a class="nav_link active" href="#header">Inicio</a></li> -->
                       <li><router-link  class="listas" :to="{name: 'vista'}">Inicio</router-link></li>
                       <li>
                            <router-link  class="listas"  :to="{name: 'about'}" >About</router-link>
                       </li>
                       <li>
                           <router-link  class="listas"  :to="{name: 'curriculum'}">Info</router-link>
                       </li>
                   </ul>
               </nav>
           </header>
                <!-- Section informacion -->
                <!-- <section id="about" class="about">
                    <div class="about-me container">

                    </div>
                </section> -->
        </body>


</template>

<script>
    
// import Section from '../components/Info.vue';

//     export default{
//         components:  Section 

//     }
</script>

<style scoped>
    body{
        font-family: sans-serif;
        background-color: #040404;
        color: #fff;
        position: relative;
        /* background: transparent; */
    }
    body::before{
        content: "";
        position: fixed;
        background-size: cover;
        background:rgb(36, 46, 36) url("/assets/img/images.jpg") top right no-repeat;
        left: 0;
        right: 0;
        top: 0;
        height: 100vh;
        z-index: -1;
    }
    @media(min-width: 1024px){
        body::before{
            background-attachment: fixed;
        }
    }
    .title{
        color: #18d26e;
        font-family: "Raleway", sans-serif;
    }
    a{
        color:#18d26e;
        text-decoration: none;
    }
    a:hover{
        color: #18d26e;
        text-decoration: none;
    }
    .listas{
        color: #fff;
    }
    h1,h2,h3,h4,h5,h6{
        font-family: "Raleway", sans-serif;
    }
    /*----------------------------------
        Navbar
    ------------------------------------ */
    .navbar{
        padding: 0;
        margin-top: 35px;
    }
    .navbar ul{
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
        align-items: center;
    }
    .navbar li{
        position: relative;
    }
    .navbar li + li{
        margin-left: 30px;
    }
    .navbar a{
        display: flex;
        align-items: center;
        align-content: space-between;
        padding: 0;
        font-family: "Poppins", sans-serif;
        font-size: 16px;
        font-weight: 400;
        color:rgba(255,255,255, 0.7);
        white-space: nowrap;
        transition: 0.3s;
    }
    .navbar a i{
        font-size: 12px;
        line-height: 0;
        margin-left: 5px;
    }
    /*----------------------------------
        header
    ------------------------------------ */
    .header{
        transition: ease-in-out 0.3s;
        position: relative;
        height: 100vh;
        display: flex;
        align-items: center;
        z-index: 997;
        overflow-y: auto;
    }
    .header *{
        transition: ease-in-out 0.3s
    }
    .header h1{
        font-size: 48px;
        margin: 0;
        padding: 0;
        line-height: 1;
        font-weight: 700;
        font-family: "Poppins", sans-serif;
    }
    .header h1 a, .header h1 a:hover{
        color: #fff;
        line-height: 1;
        display: inline-block;
    }
    .header h2{
        font-size: 24px;
        margin-top: 20px;
        color: rgba(255, 255, 255, 0.8);
    }

</style>