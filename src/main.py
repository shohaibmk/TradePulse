import sys
import os

# Add the src directory to the path to allow imports
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from model.model import StockAnalysis

def main():
    # Create an instance of StockAnalysis
    stock_analyzer = StockAnalysis()
    
    # Example usage
    ticker = "AAPL"  # Apple Inc.
    time_period = "5y"  # 1 year of data
    
    # Get stock details
    stock_details = stock_analyzer.get_stock_details(ticker, time_period)
    
    if stock_details:
        print(f"Company: {stock_details['company_name']}")
        print(f"Current Price: ${stock_details['current_price']}")
        print(f"Market Cap: ${stock_details['market_cap']:,}")
        print(f"P/E Ratio: {stock_details['pe_ratio']}")
        print(f"52-Week High: ${stock_details['fifty_two_week_high']}")
        print(f"52-Week Low: ${stock_details['fifty_two_week_low']}")
        #print(stock_details.keys())
    else:
        print(f"Failed to retrieve data for {ticker}")

if __name__ == "__main__":
    main()
