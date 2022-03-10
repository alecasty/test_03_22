<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\Http\Controllers\Controller;

class SanctumLoginController extends Controller
{
    //
    public function login(Request $request){
        $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);
    
        $user = User::where('username', $request->username)->first();
    
        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'username' => ['The provided credentials are incorrect.'],
            ]);
        }
        return $user->createToken('dispositivo')->plainTextToken;
    }

    public function logout(Request $request){
        $user = auth('sanctum')->user();
        $user->currentAccessToken()->delete();
        return response('Logged out', 200);
    }

    public function checkToken(){
        return true;
    }
}
