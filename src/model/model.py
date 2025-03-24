import yfinance as yf
from datetime import datetime, timedelta
import pandas as pd


from autogluon.timeseries import TimeSeriesPredictor, TimeSeriesDataFrame

class StockAnalysis:
    """
    A class to analyze stock data using Yahoo Finance.
    """
    
    def __init__(self):
        """
        Initialize the StockAnalysis class.
        """
        pass
    
    
    
    def get_stock_details(self, ticker, time_period="1y"):
        """
        Get stock details from Yahoo Finance based on the stock ticker.
        
        Args:
            ticker (str): The stock ticker symbol (e.g., 'AAPL', 'MSFT', 'GOOG').
            time_period (str): Time period for historical data. Default is "1y" (1 year).
                               Can be "1d", "5d", "1mo", "3mo", "6mo", "1y", "2y", "5y", "10y", "ytd", "max"
            
        Returns:
            dict: A dictionary containing stock information.
        """
        try:
            # Create a Ticker object
            stock = yf.Ticker(ticker)
            
            # Get basic stock info
            info = stock.info
            
            # Get historical market data for the specified time period
            hist = stock.history(period=time_period)
            
            # Return a dictionary with relevant stock details
            return {
                'info': info,
                'history': hist,
                'current_price': info.get('currentPrice', None),
                'company_name': info.get('shortName', None),
                'market_cap': info.get('marketCap', None),
                'pe_ratio': info.get('trailingPE', None),
                'dividend_yield': info.get('dividendYield', None),
                'fifty_two_week_high': info.get('fiftyTwoWeekHigh', None),
                'fifty_two_week_low': info.get('fiftyTwoWeekLow', None)
            }
        except Exception as e:
            print(f"Error fetching data for {ticker}: {e}")
            return None
        
    
    def model_amazon_chronos_bolt_base(self,df):

        df = TimeSeriesDataFrame(df)

        predictor = TimeSeriesPredictor(prediction_length=48).fit(
            df,
            hyperparameters={
                "Chronos": {"model_path": "amazon/chronos-bolt-base"},
            },
        )

        predictions = predictor.predict(df)

if __name__ == "__main__":
    data = StockAnalysis().get_stock_details(ticker='GOOG')
    hist = pd.DataFrame(data['history'])
    #StockAnalysis().model_amazon_chronos_bolt_base(data['history'])
    print(hist.keys())
