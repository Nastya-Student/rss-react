export interface TradingCard {
  	"uid": string,
		"name": string,
		"number": boolean,
		"releaseYear": boolean,
		"productionRun": boolean,
		"tradingCardSet": {
			"uid": string,
			"name": string
		},
		"tradingCardDeck": {
			"uid": string,
			"name": string
		}
}