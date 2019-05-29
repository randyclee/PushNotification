from pyfcm import FCMNotification

push_service = FCMNotification(api_key="AAAAG3ItgHo:APA91bEogfOFp_Ww61-X1AtqVZyXxG9FQnPjc8AWqTeOabeaxuaE3LWVI_3nTEGdJ5DYuhqu48kLC5Ou8Lm0c1x2-O8pK11vdpRY-uVeVAQyVS1c4QNpz5nfE4hJ8JxTxnvOgW9-6s5x")

# Your api-key can be gotten from:  https://console.firebase.google.com/project/<project-name>/settings/cloudmessaging

registration_id = "eZ6zsMlG2aI:APA91bG87qMf_ACHHx2cSBiu9IWbR9W78XQnzYO1Xz6qG116rLmacRZYwoFJM8mECQ19JVkbowolpxdFOpHbrwQGYiSnNeGJFuwSIeqN5MSJ6K3ZNe8wPhANd56V3F5ffHl5dyi7XpFH"
message_title = "Uber update"
message_body = "Hi john, your customized news for today is ready"
result = push_service.notify_single_device(registration_id=registration_id, message_title=message_title, message_body=message_body)

print result
