<?php include("popup.php")?>
<?php include("header.php")?>
<?php include("clock.php")?>

<link rel="stylesheet" href="tasks/tasks.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css" integrity="sha384-jLKHWM3JRmfMU0A5x5AkjWkw/EYfGUAGagvnfryNV3F9VqM98XiIH7VBGVoxVSc7" crossorigin="anonymous">
<center>
<section class="tasks-page-container" style="padding: 20%; margin: 0px; padding-top: 0%; background-image: linear-gradient(#031d44, #2a75e6); height:47vh;">
    <!-- Input Section -->
    <div class="tasks-input">
        <form action="" id="new-task-form" style="margin-bottom: 0px;">
            <!-- Enter Text -->
            <input type="text" name="" id="new-task-input" class="tasks-add-area" placeholder="Enter Your Task" autocomplete="off">

            <!-- Add Button -->
            <button class="tasks-add-button" onclick="{return false;}">Add Task</button>
        </form>
    </div>
    
    <section class="tasks-container">
        <!-- To Do -->
        <div class="tasks-board to-do tasks">
            <!-- Heading -->
            <div class="tasks-board-heading" draggable="false">
                To Do
            </div>

            <!-- Tasks -->
            <!-- <div class="tasks-item draggable" draggable="true" >
                
                <div class="content">
                    <input type="text" class="task-input-el" value="hello" autocomplete="off" style="width: 98%; font-size:20px;" readonly>
                    <div class="edit-del">
                        <button onclick="{return false;}" ><i class="fa fa-solid fa-pen-to-square"></i></button>
                        <button onclick="{return false;}"><i class="fa fa-solid fa-trash icons delete"></i></button>
                        
                    </div>
                </div>
            </div> -->
            
        </div>

        <!-- Doing -->
        <div class="tasks-board doing">
            <div class="tasks-board-heading">
                Doing
            </div>
            
        </div>

        <!-- Done -->
        <div class="tasks-board done">
            <div class="tasks-board-heading">
                Done
            </div>
        </div>
        
    </section>
    </center>
</section>
<script src="tasks/tasks2.js"></script>
<!-- <script src="tasks/task_input.js"></script> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>