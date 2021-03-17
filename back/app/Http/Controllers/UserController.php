<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Log;

class UserController extends Controller
{
    /**
     * Store a new user.
     *
     * @param  Request  $request
     * @return Response
     */
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }
    

    public function store(Request $request) {

        // try {
            $inputs = $request->all();

            $this->validate($request, [
                'name' => 'required|string',
                'email' => 'required|email|unique:users',
                'password' => 'required',
                'gender' => 'required',
                'age' => 'required',
                'address' => 'required'
            ]);

            $user = new User;
            $user->name = $inputs['name'];
            $user->email = $inputs['email'];
            $user->password = $inputs['password'];
            $user->gender = $inputs['gender'];
            $user->age = $inputs['age'];
            $user->address = $inputs['address'];

            $user->save();

            return response()->json(['user' => $user, 'message' => 'CREATED'], 201);
        // } catch (\Exception $e) {
        //     return response()->json(['message' => $e], 409);
        // }

        

    }

    public function update(Request $request, $id) {
        try {
            $inputs = $request->all();

            $this->validate($request, [
                'name' => 'required|string',
                // 'email' => 'required|email|unique:users',
                // 'password' => 'required',
                'gender' => 'required',
                'age' => 'required',
                'address' => 'required'
            ]);
    
            $user = User::where('id', $id)->update([
                'name' => $inputs['name'],
                'email' => $inputs['email'],
                // 'password' => app('hash')->make($input['password']),
                'gender' => $inputs['gender'],
                'age' => $inputs['age'],
                'address' => $inputs['address']
            ]);
            return response()->json(['user' => $user, 'message' => 'UPDATED'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e], 409);
        }
    }

    public function show(Request $request) {
        try {
            $users = User::get();

            return response()->json(['users' => $users, 'message' => 'GOT'], 200);
            
        } catch (\Exception $e) {
            return response()->json(['message' => $e], 409);
        }
    }

    public function destroy(Request $request, $id) {
        try {
            $user = DB::table('users')->where('id', '=', $id)->delete();;
            return response()->json(['users' => $user, 'message' => 'DESTROYED'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e], 409);
        }
    }


}