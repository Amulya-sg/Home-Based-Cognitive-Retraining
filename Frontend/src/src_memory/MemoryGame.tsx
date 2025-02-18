import React, { CSSProperties, useEffect, useState , } from "react";
import { useNavigate } from "react-router-dom";
import ReactFlipCard from "reactjs-flip-card";
import allEqual from "./AllEqual";
import getGeneratedGrid from "./getGeneratedGrid";
import './MemoryGame.css'
import { availableCardStatuses } from "./consts";

interface MemoryGameProps {
    containerStyle?: CSSProperties,
    gridNumber: number,
    foundPair?: Function,
    notFoundPair?: Function,
    gameFinished?: Function,
    holeCardsColor?: string,
    foundCardsColor?: string,
    frontCardsCss?: string
    backCardsCss?: string
}

function validateGridNumber(gridNumber: number) {
    if (!Number.isInteger(gridNumber) || !(gridNumber >= 4 && gridNumber <= 6))
        throw new Error("grid number must be an Integer number between 4 and 6")
    return null
}

export default function MemoryGame(
    {
        containerStyle = {},
        gridNumber = 4,
        foundPair = () => undefined,
        notFoundPair = () => undefined,
        gameFinished = () => undefined,
        holeCardsColor = 'orange',
        foundCardsColor = 'yellow',
        frontCardsCss = '',
        backCardsCss = ''
    }: MemoryGameProps) {
    useState(validateGridNumber(gridNumber))
    const [iconsGrid] = useState<React.ReactNode[]>(getGeneratedGrid(gridNumber))
    const [cardStatuses, setCardsStatuses] = useState<string[]>(iconsGrid.map(_ => availableCardStatuses.hole))
    const navigate = useNavigate();

    useEffect(() => {
        const finished = allEqual(cardStatuses, availableCardStatuses.discovered)
        if (finished) {
            setTimeout(() => {
                gameFinished()
            }, 200)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cardStatuses])

    useEffect(() => {
        let cardsClickedArray: { status: string, icon: React.ReactNode }[] = []
        cardStatuses.forEach((status, index) => {
            const icon = iconsGrid[index]
            if (status === availableCardStatuses.clicked) {
                cardsClickedArray.push({ status, icon })
            }
        })
        if (cardsClickedArray.length === 2) {
            var Score = 0;
            if (cardsClickedArray[0].icon === cardsClickedArray[1].icon) {
                foundPair()
                Score = Score + 50;
                setTimeout(() => {
                    const newCardStatuses = cardStatuses.map(status => {
                        if (status === availableCardStatuses.clicked)
                            return availableCardStatuses.discovered
                        return status
                    })
                    setCardsStatuses(newCardStatuses)
                }, 200)
                localStorage.setItem("Memoryscore", Score.toString());
            } else {
                notFoundPair()
                setTimeout(() => {
                    const newCardStatuses = cardStatuses.map(status => {
                        if (status === availableCardStatuses.clicked)
                            return availableCardStatuses.hole
                        return status
                    })
                    setCardsStatuses(newCardStatuses)
                }, 700)
            }

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cardStatuses])

    const getCardStyle = (currentCardStatus: string) => ({
        background: currentCardStatus === availableCardStatuses.discovered
            ? foundCardsColor
            : holeCardsColor
    })

    const resetGame = () => {
        setCardsStatuses(iconsGrid.map(_ => availableCardStatuses.hole));
    }
    const Backoff = () =>{
        const ID =localStorage.getItem('userId');
        
        navigate(`/actualhome/${ID}`)
    }

    return (
        <div>
            <div className="title">
                Flip the cards, Test your memory
                <div
                    className={`MemoryGame_grid MemoryGame_gridTemplateColumns${gridNumber}`}
                    style={containerStyle}
                >
                    {iconsGrid.map((icon, index) => {
                        const currentCardStatus = cardStatuses[index]
                        return <ReactFlipCard
                            key={index}
                            flipCardContainerCss={`${currentCardStatus === availableCardStatuses.discovered ? 'MemoryGame_pairFound' : ''}`}
                            flipByProp={currentCardStatus !== availableCardStatuses.hole}
                            width={"auto"}
                            height={"auto"}
                            cursor={"pointer"}
                            flipTrigger={'disabled'}
                            frontStyle={getCardStyle(currentCardStatus)}
                            backStyle={getCardStyle(currentCardStatus)}
                            frontCss={`MemoryGame_cardCss ${frontCardsCss}`}
                            backCss={`MemoryGame_cardCss ${backCardsCss}`}
                            onClick={() => {
                                const cardStatusesClone = [...cardStatuses]
                                const currentCard = cardStatusesClone[index]
                                const twoCardsClicked: boolean = cardStatusesClone.filter(
                                    c => c === availableCardStatuses.clicked
                                ).length === 2

                                if (twoCardsClicked ||
                                    currentCard === availableCardStatuses.clicked ||
                                    currentCard === availableCardStatuses.discovered) {
                                    return
                                }
                                cardStatusesClone[index] = availableCardStatuses.clicked
                                setCardsStatuses(cardStatusesClone)
                            }}
                            frontComponent={<div />}
                            backComponent={<div className={"MemoryGame_padding20"}>{icon}</div>}
                        />
                    })}
                </div>
            </div>
            <div className={"reset-button"}>
                <button onClick={resetGame}>Retry</button>
            </div>
            <div className={"Back-button"}>
                <button onClick={Backoff}>Back</button>
            </div>
        </div>
    )
}
