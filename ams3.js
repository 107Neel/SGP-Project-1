
function check()
{   
    var txt = new ActiveXObject("Scripting.FileSystemObject");
    

    var uname=s.getElementById("uname").Value;
    var email=s.getElementById("email").Value;
    var pwd=s.getElementById("pwd").Value;

    s.WriteLine("USERNAME => "+ uname);

    s.WriteLine("EMAIL => "+ email);
    s.WriteLine("PASSWORD => "+ pwd);

    s.close();
}