#!/bin/bash

# Clean build cache and reinstall
echo "Cleaning build cache..."
rm -rf .next
rm -rf node_modules/.cache

echo "All cache cleared!"
echo ""
echo "To start development server, run:"
echo "  npm run dev"
