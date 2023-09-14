import React from 'react'

export default function PartyFlags({ 
    politicalParties = [], 
    isSenate = false, 
    partiesDisplayed = null,
    partiesDisplayedStartingAt = null,
    isPolls,
}) {

    let politicalPartiesSorted = politicalParties;

    if (isSenate) {
        politicalPartiesSorted = politicalPartiesSorted.sort((a, b) => parseFloat(b.seats_senate) - parseFloat(a.seats_senate));
    } else {
        politicalPartiesSorted = politicalPartiesSorted.sort((a, b) => parseFloat(b.seats) - parseFloat(a.seats));
    }

    if (partiesDisplayed) {
        politicalPartiesSorted = politicalPartiesSorted.slice(0, partiesDisplayed)
    }
    if (partiesDisplayedStartingAt) {
        politicalPartiesSorted = politicalPartiesSorted.slice(partiesDisplayedStartingAt, partiesDisplayedStartingAt.length)
    }

    return (
        <div className='parties-container mt-1 h-100'>
            {politicalPartiesSorted !== undefined && politicalPartiesSorted.map((party, index) =>
                <div className='party-flag mx-lg-4 mx-1 mt-md-3 mt-lg-0 h-md-50 h-lg-100 rounded-top-4 align-center' style={{ backgroundColor: isSenate ? "white" : party.color, width: '100%', borderColor: isSenate ? party.color : "white", borderWidth: isSenate ? 3 : 0, borderBottomWidth: 0, borderStyle: isSenate ? "solid" : "none" }} key={index}>
                    {/* polls range */}
                    {isPolls === 'intereconomía'&&
                        <div>
                            <p className='fw-bold fs-2 mt-1 text-end px-2 me-2' style={politicalPartiesSorted.length <= 2 ? { marginBottom: 2.2 + 'em', color: isSenate ? party.color : "white" } : { marginBottom: isPolls ? 0 + 'em' : 1.5 + 'em', color: isSenate ? party.color : "white" }}>{party.upper_range + '/' + party.lower_range}</p>
                        </div>
                    }
                    <div className={isPolls === 'intereconomía' || isPolls === 'tve' ? 'party-flag-img2 m-auto' : 'party-flag-img m-auto pb-2'}><img className="w-75 w-sm-100" src={isSenate ? party.logo_senate : party.logo} alt={"Logo partido " + party.name} style={{ maxHeight: 80 }} /></div>
                    {isPolls == null &&
                        <div>
                            <p className='seats mt-1' style={politicalPartiesSorted.length <= 2 ? { marginBottom: 2.2 + 'em', color: isSenate ? party.color : "white" } : { marginBottom: 1.5 + 'em', color: isSenate ? party.color : "white" }}>{isSenate ? party.seats_senate : party.seats}</p>
                        </div>
                    }
                    {isPolls === 'tve' &&
                        <div>
                            <p className='fw-bold fs-2 my-2 text-center px-2' style={politicalPartiesSorted.length <= 2 ? { marginBottom: 2.2 + 'em', color: isSenate ? party.color : "white" } : { marginBottom: isPolls ? 0 + 'em' : 1.5 + 'em', color: isSenate ? party.color : "white" }}>{party.upper_range + '/' + party.lower_range}</p>
                        </div>
                    }
                </div>
            )}
        </div>
    )
}
