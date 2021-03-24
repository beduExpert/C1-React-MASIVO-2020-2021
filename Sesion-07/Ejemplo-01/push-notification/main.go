package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"log"

	"github.com/SherClockHolmes/webpush-go"
)

var (
	genKeys bool
	msg     string
)

func init() {
	flag.BoolVar(&genKeys, "g", false, "Generate VAPID keys")
	flag.StringVar(&msg, "m", "Message from cURL", "Message in the notification")
}

func main() {
	flag.Parse()

	if genKeys {
		generateVAPIDKeys()
		return
	}

	sendNotification(msg)
}

func generateVAPIDKeys() {
	privateKey, publicKey, err := webpush.GenerateVAPIDKeys()
	if err != nil {
		panic(err)
	}

	fmt.Printf("public key: %s\nprivate key: %s", publicKey, privateKey)
}

func sendNotification(msg string) {
	const (
		subscription    = `{"endpoint":"https://fcm.googleapis.com/fcm/send/dsgxTVLrmJ0:APA91bH4uVxngSF33ggD94qRM8Ho7PPRljdm16IscAHqcLz1KTI3TezXmBKLmLkudQ7lnae_Ro-FzyrLNRqT1mPyJZIg47cFRXO5w4-O-AOw4Hn3zMrbyAkzlnDJnm61uHtYcMqY-Rc-","expirationTime":null,"keys":{"p256dh":"BMbUBvD4dN9WpIFhfjpWWJKzp5QpNUKOFvdMfMO7g-vqqch2O3WUVp63nuMcejEbcuQp8e5wLoZQmvmNVsc06A8","auth":"9LX_wnliioB6eGErMV2uBA"}}`
		vapidPublicKey  = "BDThDairU5meugiFMDGdOPkmf3ZJN_5Ajf8KuDPHPYTERDCrQJjBKEdBPKQvKoPv_vZSXN5EflwLaXenajwd1e0"
		vapidPrivateKey = "C7aHoO0D55topiARVbHuSFHZYj3xnggG3x_LQkT0_98"
	)

	// Decode subscription
	s := &webpush.Subscription{}
	if err := json.Unmarshal([]byte(subscription), s); err != nil {
		log.Fatal(err)
	}

	// Send Notification
	resp, err := webpush.SendNotification([]byte(msg), s, &webpush.Options{
		Subscriber:      "test@pitakill.net", // Do not include "mailto:"
		VAPIDPublicKey:  vapidPublicKey,
		VAPIDPrivateKey: vapidPrivateKey,
		TTL:             30,
	})
	if err != nil {
		log.Fatal(err)
	}
	defer resp.Body.Close()
}
