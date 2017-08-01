import React from 'react'

class Profile extends React.Component {
  render() {
    if (!this.props.profile) return null;

    return <div className="card small horizontal profile teal lighten-3">
        <div className="card-image">
            <img src={this.props.profile.avatarUrl}/>
        </div>
        <div className="card-stacked">
            <div className="card-content valign-wrapper">
                <dl>
                    <dt>Current Rank:</dt>
                    <dd>
                        {this.props.profile.fightData.belts.length
                            ? <img src={`/images/belt-200-${this.props.profile.fightData.belts[this.props.profile.fightData.belts.length-1]}.png`} alt={this.props.profile.fightData.belts[this.props.profile.fightData.belts.length-1]}/>
                            : "n00b"
                        }
                    </dd>
                    <dt>Member Since:</dt>
                    <dd>{this.props.profile.createdDate}</dd>
                    <dt>Total Sparring Sessions:</dt>
                    <dd>{this.props.profile.fightData.sparCount}</dd>
                    <dt>Fight Record:</dt>
                    <dd>{`${this.props.profile.fightData.fightsWon}-${this.props.profile.fightData.fightsLost}`}</dd>                                                            
                </dl>
            </div>
        </div>
    </div>
  }
}

export default Profile;