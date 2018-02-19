import UIKit
import MobileCoreServices

@objc(NailPluginSwift) class NailPluginSwift : CDVPlugin {

    var command : CDVInvokedUrlCommand?

    ///Main function which would be call to open the extension
    @objc(login:)
    func login(command: CDVInvokedUrlCommand){
        //set the protocols and and singleton for the extension
        let item = "org.moodle.moodle_mobile_app"
        let singleton = true
        self.command = command

        print("IN PLUGIN SWIFT , singleton : \(singleton)")

        let activityVC = UIActivityViewController(activityItems: [item, singleton.description], applicationActivities: nil)
        DispatchQueue.main.async {
            self.viewController.present(activityVC, animated: true, completion: nil)
        }

        activityVC.completionWithItemsHandler = {
            activityType, completed, returnedItems, error in
            print("BACK FROM EXTENSION")
            if(returnedItems == nil || returnedItems!.count <= 0){
                print("No Item found from extension")
                return
            }else {
                let item : NSExtensionItem = returnedItems?.first as! NSExtensionItem
                self.extractDataFromExtension(item: item)
            }
        }
    }

    //Extract the data from the extension
    func extractDataFromExtension(item : NSExtensionItem){
        let itemProvider = item.attachments?.first as! NSItemProvider

        if itemProvider.hasItemConformingToTypeIdentifier(kUTTypeJSON as String){
            itemProvider.loadItem(forTypeIdentifier: kUTTypeJSON as String, options: nil, completionHandler: { (data, error) -> Void in
                if error != nil {
                    print("error on extracting data from extension , \(error.localizedDescription)")
                    return
                }
                let jsonData = data as! Data
                do{
                    //returned items is in json format
                    
                    let dataSource = try JSONSerialization.jsonObject(with: jsonData, options: []) as? [String : Any]
                    print("DATA SOURCE : \(dataSource!)")
                    let result = CDVPluginResult.init(status: CDVCommandStatus_OK, messageAs: dataSource!["api_key"] as! String)
                    self.commandDelegate.send(result, callbackId: self.command?.callbackId)

                } catch{
                    print(error)
                    return
                }
            })

        }
    }



}
