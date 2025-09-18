#!/bin/bash

echo "🔍 Monitoring Railway Deployment Progress..."
echo "============================================="

# Get the Railway backend URL (replace with your actual Railway URL)
RAILWAY_BACKEND_URL="https://web-production-92593.up.railway.app"

echo ""
echo "⏳ Waiting for deployment to complete..."
echo "Backend URL: $RAILWAY_BACKEND_URL"
echo ""

# Function to test if the service is responding
test_service() {
    local url=$1
    local response=$(curl -s -o /dev/null -w "%{http_code}" "$url" --max-time 10)
    echo $response
}

# Monitor for up to 10 minutes (60 checks, 10 seconds each)
for i in {1..60}; do
    echo -n "Check $i/60: "
    
    # Test health endpoint
    health_code=$(test_service "$RAILWAY_BACKEND_URL/health")
    
    if [ "$health_code" = "200" ]; then
        echo "✅ Service is UP! (HTTP $health_code)"
        echo ""
        echo "🎉 Deployment completed successfully!"
        echo ""
        echo "Testing endpoints..."
        
        # Test API info
        echo -n "API Info: "
        api_code=$(test_service "$RAILWAY_BACKEND_URL/api/info")
        if [ "$api_code" = "200" ]; then
            echo "✅ Working (HTTP $api_code)"
        else
            echo "❌ Failed (HTTP $api_code)"
        fi
        
        # Test MJND info
        echo -n "MJND Info: "
        mjnd_code=$(test_service "$RAILWAY_BACKEND_URL/api/mjnd/info")
        if [ "$mjnd_code" = "200" ]; then
            echo "✅ Working (HTTP $mjnd_code)"
        else
            echo "❌ Failed (HTTP $mjnd_code)"
        fi
        
        # Test MJND chat
        echo -n "MJND Chat: "
        chat_response=$(curl -s -X POST "$RAILWAY_BACKEND_URL/api/mjnd/chat" \
            -H "Content-Type: application/json" \
            -d '{"message": "Hello MJND"}' \
            --max-time 10)
        
        if echo "$chat_response" | grep -q "MJND"; then
            echo "✅ Working"
            echo "Response: $(echo "$chat_response" | head -c 100)..."
        else
            echo "❌ Failed"
            echo "Response: $chat_response"
        fi
        
        echo ""
        echo "🚀 Your Maijjd backend is now live at: $RAILWAY_BACKEND_URL"
        echo "🤖 MJND Agent is ready to help your customers!"
        
        exit 0
    else
        echo "⏳ Still building... (HTTP $health_code)"
    fi
    
    sleep 10
done

echo ""
echo "⏰ Timeout reached. Deployment may still be in progress."
echo "Check your Railway dashboard for the latest status."
echo "URL: https://railway.app"
