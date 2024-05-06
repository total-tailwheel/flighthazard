```swift
// File path: Flight Hazard/Flight Hazard/FlightDataService.swift

import Foundation

struct FlightDataService {
    static func getAirports(completion: @escaping ([String]?, Error?) -> Void) {
        guard let url = URL(string: "https://your-backend-url.com/api/airports") else {
            completion(nil, NSError(domain: "", code: 1, userInfo: [NSLocalizedDescriptionKey: "Invalid URL"]))
            return
        }
        
        let task = URLSession.shared.dataTask(with: url) { data, response, error in
            if let error = error {
                DispatchQueue.main.async {
                    completion(nil, error)
                }
                return
            }
            
            guard let data = data, let airports = try? JSONDecoder().decode([String].self, from: data) else {
                DispatchQueue.main.async {
                    completion(nil, NSError(domain: "", code: 2, userInfo: [NSLocalizedDescriptionKey: "Failed to decode data"]))
                }
                return
            }
            
            DispatchQueue.main.async {
                completion(airports, nil)
            }
        }
        
        task.resume()
    }

    static func getFlightPlans(completion: @escaping ([FlightPlan]?, Error?) -> Void) {
        guard let url = URL(string: "https://your-backend-url.com/api/flight-plans") else {
            completion(nil, NSError(domain: "", code: 1, userInfo: [NSLocalizedDescriptionKey: "Invalid URL"]))
            return
        }
        
        let task = URLSession.shared.dataTask(with: url) { data, response, error in
            if let error = error {
                DispatchQueue.main.async {
                    completion(nil, error)
                }
                return
            }
            
            guard let data = data, let flightPlans = try? JSONDecoder().decode([FlightPlan].self, from: data) else {
                DispatchQueue.main.async {
                    completion(nil, NSError(domain: "", code: 2, userInfo: [NSLocalizedDescriptionKey: "Failed to decode data"]))
                }
                return
            }
            
            DispatchQueue.main.async {
                completion(flightPlans, nil)
            }
        }
        
        task.resume()
    }
}

// Data model representing a Flight Plan
struct FlightPlan: Codable {
    var start: String
    var end: String
    var date: String
}
```

Apply this refactored code to update the `FlightDataService.swift` file. Ensure that your backend URLs are correctly configured and replace `"https://your-backend-url.com"` with the actual URL of your backend. This setup uses `URLSession` for network requests and `JSONDecoder` for decoding the JSON data into Swift structures. The method now uses completion handlers to pass data back asynchronously, which requires updates in `ContentView.swift` to handle these asynchronous calls.
