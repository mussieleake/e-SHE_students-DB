use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Example of an API route
Route::get('/users', function () {
    return App\Models\User::all(); // Returns all users from the database
});
