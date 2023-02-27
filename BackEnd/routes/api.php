<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/uploadJson', function (Request $request) {

    $data = $request->all();
    $newJsonString = json_encode($data, JSON_PRETTY_PRINT);

    file_put_contents(base_path('../FrontEnd/src/assets/corousel.json'), stripslashes($newJsonString));
 
    return $request;

});

Route::post('/uploadFile', function (Request $request) {

    $count = count($_FILES['files']['name']);
    
    if ($count > 0){

        for ($i=0; $i < $count; $i++) { 

            $tmpFilePath = $_FILES['files']['tmp_name'][$i];
            $newFileName = '../../FrontEnd/src/assets/images/'.$_FILES['files']['name'][$i];
            copy($tmpFilePath,$newFileName);
        }
    }
    

    return $request;


});