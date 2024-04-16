import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank {
  stable var currentValue: Float = 300;
  stable var startTime = Time.now();
  startTime := Time.now();
  public query func topUp(amount : Float) : async Float {
    currentValue += amount;
    Debug.print(debug_show (currentValue));
    return currentValue;
  };

  public query func withDraw(amount : Float) : async Float {
    if (amount > currentValue) {
      Debug.print("No enough balance.");
    } else {
      currentValue -= amount;
      Debug.print(debug_show (amount));
    };
    return currentValue;
  };

  public query func checkBalace() : async Float {
    return currentValue;
  };

  public func compound(){
    let elapsedTime = (Time.now() - startTime)/1000000000;
    currentValue := currentValue*(1.01**Float.fromInt(elapsedTime));
    startTime := Time.now();
  }

};
