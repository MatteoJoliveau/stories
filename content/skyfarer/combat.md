+++
title = "Sky Combat"
template = "skyfarer/page.html"
description = "A detailed engine-to-engine combat module for Skyfarer"
draft = false
date = 2021-01-21
updated = 2021-01-22

[extra]
icon = "fas fa-fist-raised"
cover = "skyfarer/sunlesskies.webp"
+++

The skies are a harsh and unwelcoming place. Players will face nightmarish monsters, star-maddened bandits and imposing
engines determined to wipe them out.  
In an attempt to recreate the same vibe as [Sunless Skies], this addendum introduces a detailed combat system for
fighting aboard their steam locomotive.

This system focuses on the players and their role aboard the engine, so that everyone gets a chance of participating in
the fight even if they are not steering or shooting. It borrows from other RPG systems while trying to stay true to
Skyfarer's rules and mechanics.

## Stats

Enemy engines and creatures have the same stats as players, and their value is used as a modifier for various combat
actions.

<p>{{ iron() }}: strength actions, like dealing damage, fleeing or pursuing </p>
<p>{{ mirrors() }}: aim and shoot, detect the enemy as they try to hide</p>
<p>{{ veils() }}: avoid shots, hide from the enemy</p>
<p>{{ hearts() }}: intimidate or resist intimidation</p>

Here is an example stats table for a *Star-Maddened Explorer*:

| {{ iron() }} | {{ mirrors() }} | {{ veils() }} | {{ hearts() }} |
|------|---------|-------|--------|
|  2   |    0    |   -1   |   1   |

## Stations

A sky engine has many stations the crew can man, each controlling a specific aspect of the locomotive. Any player can
occupy any available station, but players with a specific Profession are more proficient at specific posts. Having the
appropriate Profession grants an additional dice to rolls, and the highest result is used.

- **The Helm** controls the direction of the locomotive. It is used to steer the engine, dodge incoming attack and hide.  
  Players with the *Navigator* Profession are proficient with this station.
- **The Guns** are used to attack enemies and creatures, defending the engine from incoming threats.  
  Players with the *Gunner* Profession are proficient with this station.
- **The Engine Room** is the heart of the locomotive, where the fire burns bright under the boiler. It is used to
  control the speed of the engine in order to flee or ram a target.  
  Players with the *Stoker* Profession are proficient with this station.
- **The Communication Room** is used to signal other crafts and ports. It is used to intimidate enemies and convince
  them to comply, or desist from attacking the players.  
  Players with the *Signaller* or *First Officer* Profession are
  proficient with this station.

One player can decide to perform only **one** of the following rolls per turn:

- [Attacking](#attacking) (requires **The Guns** to be manned)
- [Fleeing](#fleeing) (requires **The Engine Room** to be manned)
- [Hiding](#hiding) (requires **The Helm** to be manned)
- [Intimidating](#intimidating) (requires **The Communication Room** to be manned)

Despite not being an action per se, *defending* from an attack requires **The Helm** to be manned.
If no-one is controlling the locomotive, the incoming attack automatically lands without rolling the hit die.

Additionally, any player not engaged in any roll can attempt to perform an [Action](#actions). Only one action can be
performed per turn, per player.

### Changing stations

Players can choose to hop in or out of a station as a free action at the beginning of each turn, for example
to perform a special action that requires another station.

> **Example**  
> At the beginning of the turn, the gunner leaves the main cannon and rushes to the **Communications Room**.
> It then proceeds to bark mean swears and colourful insults to the enemy Dreadnought, attempting to *intimidate* it.
> 
## Initiative

At the beginning of the fight everyone rolls for initiative to determine the turn order. This is done by rolling a `d10`
and adding the {{ hearts() }} modifier. Traits and conditions apply as usual. For example, an engine with the *Fast*
trait receives a `+1`, while being *Slow* on the other hand gives a `-1` modifier. The GM ranks every participant in the
fight in order of result, from highest to lowest. Each participant will play in this order until the end of the fight.

The players act as a single entity. They each roll their own initiative, adding their own modifier, and the highest roll
is chosen for the entire crew.

> **Example**  
> The players are attacked by two Chorister Bees. They have a {{ hearts() }} stat of `1`.  
> The players roll `3d10`, one each, and score the following (adding their {{ hearts() }} stat):  
> `d10 + 1 = (8) + 1 = 9`  
> `d10 + 0 = (2) + 0 = 2`  
> `d10 - 1 = (7) - 1 = 6`  
> They keep the highest result, which is `9`.  
> The GM rolls `2d10` (one for each creature) and adds `1` for their {{ hearts() }}:  
> `d10 + 1 = (9) + 1 = 10`  
> `d10 + 1 = (7) + 1 = 8`  
> The order of action will therefore be:
> 1) Chorister Bee
> 2) Players
> 3) Chorister Bee

After rolling for initiative, but before the fight begins, players have to choose their station. They can also remain on deck, ready to
move and do their part. It is recommended that at least the **Helm** and **Guns** are manned, otherwise they won't be able
to attack or defend themselves.

## Attacking

Attacks consist of two dice rolls, a `d10` for hitting and a `d6` for damages.

The `d10` is a roll-off between the {{ mirrors() }} of the attacker and the {{ veils() }} of the defender. If the
attacker rolls higher, the attack goes through. If the defender rolls higher, the attack misses.

When the players are attacking, the {{ mirrors() }} of the player manning the **Guns** is used. When the players are
defending, the {{ veils() }} of the **helmsman** is used (since they are the one trying to avoid the shot).

Conditions and traits are applied as usual. Only one trait and one condition can be applied per roll.

Finally, the Profession of each player matters. If the player shooting the guns has the *Gunner* Profession, they roll
**two dice** instead of one, discarding the lowest result. The *Navigator* player receives the same benefit when
defending from an attack.

> **Example**  
> The players shoot the main cannon against the enemy engine. The enemy has a {{ veils() }} stat of `1`, while the player manning
> the guns has a {{ mirrors() }} stat of `2`. However, due to the *Drunk* condition they got earlier for drinking an entire bottle of wine alone, they have a `-1` to hit. They are the *Quartermaster* of the crew, so they only get one die to roll.  
> The gunner rolls a `d10` and gets an `8`. The result is `10` after adding the {{ mirrors() }} modifier, but is reduced to `9` by the gunner's intoxicated state.  
> The GM rolls a `d10` for the enemy, getting a `6` plus the {{ veils() }} modifier. Since the enemy engine has the trait *Tiny*, it gets an additional `+1` modifier for a total of `8`.  
> Since `9` is greater than `8`, the shot goes through.

When an attack lands successfully, damages are rolled. Rolling a `d6` and adding the {{ iron() }} modifier of the gunner
and any condition or trait modifier. As with the previous roll, having the *Gunner* Profession grants an
additional `d10` and the highest result is used.

> **Example**  
> The gunner rolls a `d6` and gets a `3`, plus `2` from their {{ iron() }}. The player's engine has the trait *Up-gunned*, so it gets an additional `+1` to damages, totalling `6` damages.  
> However, the enemy engine is *Heavily armoured*, so it applies a `-1` modifier to the roll. This results in a total of `5` damages being dealt.

The amount of damage an NPC engine or creature can sustain is determined by the GM. The following table contains a
recommended amount of hit-points based on the difficulty of the challenge.

|     Challenge     |   HPs   |
|-------------------|---------|
|    low            |  5-10   |
|    medium         |  10-30  |
|    high           |  30-50  |
|    nightmarish    |  50+    |

Players don't have HPs. Instead, getting hit by an enemy increases their **Peril** by the result of a `d3` roll (rolling
a `d6` and halving the result, rounding up). Every player's **Peril** increases simultaneously by this amount.

## Fleeing

If the fight is proving too dangerous or the enemy too fierce, fleeing is the only option.
The players can attempt to leave the fight by performing an {{ iron() }} roll-off.  
The player manning the **Engine Room** rolls a `d10` and adds their {{ iron() }} modifier, plus any relevant Trait and Condition that may apply.
If they have the *Stoker* Profession, they roll **two dice** instead of one, discarding the lowest result.  

The GM proceeds to do the same, rolling a `d10` plus the enemy {{ iron() }} modifier.

If the players roll higher than the GM, they flee successfully. Their Peril is lowered accordingly to reflect them getting out of
combat. It may reset to zero if they completely escape the fight, or it may be lowered to a certain amount if the threat is still lingering
(for example, they may escape an encounter with a forward scout, but now the main fleet knows their location and is on their tail.)

> **Example**  
> The fight with the *star-maddened explorer* is not going well, and the players are close to becoming *In Danger*.
> They choose to flee the fight and put as much Sky as possible between them and the ravaging engine that is trying to ram them.  
> The player in the **Engine Room** rolls a `d10` and adds their {{ iron() }} modifier of `-1`. They roll a `9`, for a total of `8`.  
> The GM rolls a `d10` plus `2` for the explorer's {{ iron() }}. The resulting `4` is too low, and the players escape successfully.  
> Their Peril is reset to 0.

However, if the players roll lower than the GM, they fail to flee. Their Peril increases, and their turn ends immediately.
The amount of Peril is decided by the GM, but it's usually determined by a `d3` roll.

> **Example**   
> Attempting to flee the menace, the player in the **Engine Room** rolls a `d10` and adds their {{ iron() }} modifier of `-1`. They roll a `4`, for a mere total of `3`.  
> The GM rolls a `d10` plus `2` for the explorer's {{ iron() }}. The resulting `6` is higher than the players' result, so their attempt to flee fails.  
> Furious, the *star-maddened explorer* charges right at them, trying to ram their engine. The GM rolls a `d3`, scoring a `2`. Their Peril therefore increases by `2`

## Hiding

Sometimes, it is better to hide and let a threat pass by than to confront them. Sometimes, waiting for 
a window of opportunity before striking a surprise blow may be the key to victory against a more powerful foe.

Hiding allows the players to avoid being detected by an unknowing enemy, or to escape a chasing creature that is not allowing them
to flee. The player at the **Helm** can try to conceal the engine, using their {{ veils() }} modifier and any Trait or Condition that may apply,
by rolling-off a `d10` against the enemy {{ mirrors() }} stat. If they have the *Navigator* Profession, they roll **two dice** instead of one, discarding the lowest result.

If the player rolls higher, they manage to get out of sight and the enemy has to actively look for them next turn. This is their chance to sneak out and get out of trouble.
Peril is not lowered, because they are not ouf of danger yet.

If the GM rolls higher, the hiding attempt fails. The players lose their turn and the enemy has now an opportunity to blow. Peril may increase at the GM's discretion.

> **Example**  
> The swarm of Chorister Bee is upon them, but there may be a chance to avoid them by hiding in the mist behind the floating island.  
> The player at the **Helm** have a {{ veils() }} modifier of `1`. Since they are the *Navigator*, they roll `2d10`, scoring `7` and `5`.
> They keep the `7`, adding `1` from their stat for a total of `8`.  
> The GM rolls a `d10` for each Bee,  plus `0` for their {{ mirrors() }}. The resulting `5` and `3` are not enough for them to detect the engine, silently plucked against the cold
> rocks.  
> They begin to hunt for them, angry that the thieves that stole their honey are getting away.

## Intimidating

Some enemies can be scared into leaving you alone. A small Marauder engine might decide you
are not worth the risk and abandon their intention of pillaging your hold, if players shout loud enough.

The **Communications Room** contains the appropriate equipment to send messages to other crafts or creatures, such as
signal lamps, flags and megaphones. A player can attempt an *intimidation* check to see if they manage to convince or scare
the enemy into leaving the fight.

This is done with a `d10` roll-off between the parties {{ hearts() }} stats, including any Trait or Condition that may apply.
If the player performing the roll has the *Signaller* Profession they may roll **two dice** instead of one, keeping the highest result.

If the players are successful, the enemy is scared and leaves the fight immediately, otherwise the fight goes on, and the player's Peril is increased by a `d3`.

> **Example**  
> A small Marauder engine is bravely attempting to ram the players, determined to rob them of their precious cargo.  
> One player takes a megaphone from the **Communications Room** and starts threatening the enemy, promising horrible things will happen if they manage to get close enough.
> They roll a `d10` and add their {{ hearts() }} modifier of `2`. The Condition *Enraged* grants them an additional `+1`. They roll a `4`, for a total of `7`. 
> The GM rolls a `d10` plus `1` for the Marauder {{ hearts() }}. However they receive a `-1` penalty from their engine being *Tiny*. Scoring a `5` but resulting in a `6` with all modifiers applied, they are scared off
> and run away with their tail between their legs.  

## Actions

Instead of one of the previous rolls, a player can decide to perform an action. Actions are special rolls a player can perform that
can have powerful effects or give an advantage during fights. Every action can be performed by anyone, however having a
specific Profession grants an additional die to roll, keeping the highest result.

Actions can be anything a crewmember can achieve. It can be using a portable loom to slow down or speed up time,
dropping a decoy cargo crate to lure pirates away or signal a passing Stovepipe Dreadnought for help.

A player that has rolled for attacking, fleeing, hiding or intimidating cannot perform an Action in the same turn. 
Only one action can be performed per turn per player.

Actions are performed by rolling a `d10` and add the relevant ability score to the result, against a threshold set by the GM based on the difficulty of the action in the
current situation.  
The core rules suggest the following values:

|     Challenge     |   Success value   |
|-------------------|-------------------|
|       easy        |        6+         |
|       medium      |        8+         |
|       high        |        10+        |

Traits and conditions apply as usual. Failing an action may increase everyone's Peril if the outcome has some fallback.

### Example Actions

GMs are encouraged to come up with new and exiting actions using this list as inspiration.

#### Repair damages

Fix a leak in the hull, reducing everyone's Peril by 1.  

Skilled Profession: **Engineer**

#### Overload the engine

Run the boiler at increased pressure, granting more speed.  
This action allows fleeing instantly without having to roll, but increases everyone's Peril by a `d3` since the engine
risks exploding.

Skilled Profession: **Stoker**

## Roll tables

This section contains a few tables for generating traits and stats. They are merely suggestions and GMs are encouraged
to come up with interesting traits and conditions for their games!

### Traits

This table contains example traits for NPC engines and sky-beasts, as well as the modifier they apply to rolls.

| Roll  |       Trait        |                        Effect                        |
|-------|--------------------|------------------------------------------------------|
|   1   |   Heavily armoured |    -1 to received damage rolls                       |
|   2   |   Jury-rigged      |    +1 to received damage rolls                       |
|   3   |   Imposing         |    -1 to defending accuracy rolls                    |
|   4   |   Tiny             |    +1 to defending accuracy rolls                    |
|   5   |   Up-gunned        |    +1 to dealt damage rolls                          |
|   6   |   Dangerous        |    +1 when intimidating or resisting intimidation    |
|   7   |   Slow             |    -1 when trying to flee                            |
|   8   |   Fast             |    +1 when trying to flee                            |
|   9   |   Noisy            |    -1 when trying to hide                            |
|   10  |   Silent           |    +1 when trying to hide                            |

[Sunless Skies]: https://www.failbettergames.com/sunless-skies/
