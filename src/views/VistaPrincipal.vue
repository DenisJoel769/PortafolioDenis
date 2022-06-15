<template >
    <body>

           <div class="d-flex bd-highlight header">
            <h1 class="p-2 flex-grow-1 bd-highlight animate__animated animate__fadeInRight ">Denis Joel Benitez Segovia</h1>
                <ul class="navbar_ul">
                       <!-- <li><a class="nav_link active" href="#header">Inicio</a></li> -->
                       <li><router-link  class="p-2 bd-highlight listas animate__animated animate animate__backInUp" :to="{name: 'inicio'}">Inicio</router-link></li>
                       <li>
                            <router-link class="p-2 bd-highlight listas animate__animated animate animate__backInUp"  :to="{name: 'curriculum'}" >Curriculum</router-link>
                       </li>
                       <li>
                           <router-link  class="p-2 bd-highlight listas animate__animated animate__backInUp"  :to="{name: 'contacto'}">Contacto</router-link>
                       </li>
                   </ul>
            </div> 
                  <router-view/>
    </body>
</template>
<script>

</script>
    
<style>
body{
    background:rgb(36, 46, 36) url("/assets/img/images.jpg") top right no-repeat;
}
.header{
    border: 1px solid black;
    background: black;
}
.header h1,h2,h3,h4{
    color: aliceblue;
}
.header h1{
   color: #18d26e;
   font-family: sans-serif;
}
.title :hover{
    color: #18d26e;
}
.navbar_ul{
    position: relative;
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}
    .listas{
        display: flex;
        text-decoration: none;
        color:aliceblue;
    }
    .listas:hover{
        color: #18d26e;
    }
</style>