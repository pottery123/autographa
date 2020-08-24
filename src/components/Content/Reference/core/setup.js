import React, { useEffect, useContext } from "react";
import AutographaStore from "../../../AutographaStore";
import ReferenceSelector from "../ReferenceSelector";
import ReferencePanel from "../ReferencePanel";
import { useStyles } from "../useStyles";
import { Observer } from "mobx-react";
import { Paper } from "@material-ui/core";
import TranslationSetUp from "../../Translation/core/TranslationSetUp";
import { SetupContext } from "../../../../contexts/SetupContext";
import EditorDemo from "../../../../usfm-editor/demo/EditorDemo";
import ReferenceDemo from "../../../../usfm-editor/demo/ReferenceDemo";

const usfmStrings = new Map([
  ["usfmString1", `
   \\id GEN
   \\mt Mark

   \\c 1
   \\p
   \\v 1 The vision of Isaiah son of Amoz, that he saw concerning Judah and Jerusalem, in the days of Uzziah, Jotham, Ahaz, and Hezekiah, kings of Judah.
   
   \\s5
   \\q1
   \\v 2 Hear, heavens, and give ear, earth; for Yahweh has spoken:
   \\q1 "I have nourished and brought up children, but they have rebelled against me.
   \\q1
   \\v 3 The ox knows his owner, and the donkey his master's feeding trough,
   \\q1 but Israel does not know, Israel does not understand."
   
   \\s5
   \\q1
   \\v 4 Woe! Nation, sinners, a people weighed down with iniquity,
   \\q1 offspring of evildoers, sons who act corruptly!
   \\q1 They have abandoned Yahweh, they have despised the Holy One of Israel,
   \\q1 they have estranged themselves from him.
   
   \\s5
   \\q1
   \\v 5 Why are you still being beaten? Why do you rebel more and more?
   \\q1 The whole head is sick, the whole heart is weak.
   \\q1
   \\v 6 From the sole of the foot to the head there is no part unharmed;
   \\q only wounds, and bruises, and fresh open wounds;
   \\q1 they have not been closed, cleansed, bandaged, nor treated with oil.
   
   \\s5
   \\q1
   \\v 7 Your country is ruined; your cities are burned;
   \\q1 your fields—in your presence, strangers are destroying them—
   \\q1 abandoned devastation, overthrown by strangers.
   \\q1
   \\v 8 The daughter of Zion is left like a hut in a vineyard,
   \\q1 like a shed in a garden of cucumbers, like a besieged city.
   
   \\s5
   \\q1
   \\v 9 If Yahweh of hosts had not left for us a small remnant,
   \\q1 we would have been like Sodom, we would have been like Gomorrah.
   
   \\s5
   \\q1
   \\v 10 Hear the word of Yahweh, you rulers of Sodom;
   \\q1 listen to the law of our God, you people of Gomorrah:
   \\q1
   \\v 11 "What is the multitude of your sacrifices to me?" says Yahweh.
   \\q1 "I have had enough of the burnt offerings of rams, and the fat of fatted beasts;
   \\q1 and in the blood of bulls, lambs, or goats I do not delight.
   
   \\s5
   \\q1
   \\v 12 When you come to appear before me,
   \\q1 who has required this of you, to trample my courts?
   \\q1
   \\v 13 Bring no more meaningless offerings; incense is an abomination to me;
   \\q1 your new moon and Sabbath assemblies—I cannot tolerate these wicked assemblies.
   
   \\s5
   \\q1
   \\v 14 I hate your new moons and your appointed feasts;
   \\q1 they are a burden to me; I am tired of enduring them.
   \\q1
   \\v 15 So when you spread out your hands in prayer, I hide my eyes from you;
   \\q1 even though you offer many prayers, I will not listen;
   \\q1 your hands are full of blood.
   
   \\s5
   \\q1
   \\v 16 Wash, cleanse yourselves;
   \\q1 remove the evil of your deeds from my sight;
   \\q1 stop being evil;
   \\q1
   \\v 17 learn to do good;
   \\q1 seek justice, make straight the oppression,
   \\f + \\ft Instead of \\fqa make straight the oppression \\fqa* , some versions have \\fqa help the oppressed \\fqa* . \\f*
   \\q1 give justice to the fatherless, defend the widow."
   
   \\s5
   \\q1
   \\v 18 "Come now, and let us reason together," says Yahweh;
   \\q1 "though your sins are like scarlet, they will be white like snow;
   \\q1 though they are red like crimson, they will be like wool.
   
   \\s5
   \\q1
   \\v 19 If you are willing and obedient, you will eat the good of the land,
   \\q1
   \\v 20 but if you refuse and rebel, the sword will devour you,"
   \\q1 for the mouth of Yahweh has spoken it.
   
   \\s5
   \\q1
   \\v 21 How the faithful city has become a prostitute!
   \\q1 She who was full of justice—she was full of righteousness,
   \\q1 but now she is full of murderers.
   \\q1
   \\v 22 Your silver has become impure, your wine mixed with water.
   
   \\s5
   \\q1
   \\v 23 Your princes are rebels and companions of thieves;
   \\q1 everyone loves bribes and runs after payoffs.
   \\q1 They do not defend the fatherless, nor does the widow's legal plea come before them.
   
   \\s5
   \\q1
   \\v 24 Therefore this is the declaration of the Lord Yahweh of hosts, the Mighty One of Israel:
   \\q1 "Woe to them! I will take vengeance against my adversaries, and avenge myself against my enemies;
   \\q1
   \\v 25 I will turn my hand against you,
   \\q1 refine away your dross as with lye, and take away all your dross.
   
   \\s5
   \\q1
   \\v 26 I will restore your judges as at the first, and your counselors as at the beginning;
   \\q1 after that you will be called the city of righteousness, a faithful town."
   
   \\s5
   \\q1
   \\v 27 Zion will be redeemed by justice, and her repentant ones by righteousness.
   \\q1
   \\v 28 Rebels and sinners will be crushed together, and those who abandon Yahweh will be done away with.
   
   \\s5
   \\q1
   \\v 29 "For you will be ashamed of the sacred oak trees that you desired,
   \\q1 and you will be embarrassed by the gardens that you have chosen.
   \\q1
   \\v 30 For you will be like an oak whose leaf fades,
   \\q1 and like a garden that has no water.
   
   \\s5
   \\q1
   \\v 31 The strong man will be like tinder, and his work like a spark;
   \\q1 they will both burn together, and no one will quench them."
   \\s5
   `],
   
   ["Mark 1 paragraphs", `
   \\id MRK Unlocked Literal Bible
   \\ide UTF-8
   \\h Mark
   \\toc1 The Gospel of Mark
   \\toc2 Mark
   \\toc3 Mrk
   \\mt Mark
   
   \\s5
   \\c 1
   \\p
   \\v 1 This is the beginning of the gospel of Jesus Christ, the Son of God.
   \\p
   \\v 2 As it is written in Isaiah the prophet,
   \\q "Look, I am sending my messenger before your face,
   \\q the one who will prepare your way.
   \\q
   \\v 3 The voice of one calling out in the wilderness,
   \\q 'Make ready the way of the Lord;
   \\q make his paths straight.'"
   \\m
   
   \\s5
   \\p
   \\v 4 John came, baptizing in the wilderness and preaching a baptism of repentance for the forgiveness of sins.
   \\v 5 The whole country of Judea and all the people of Jerusalem went out to him. They were baptized by him in the Jordan River, confessing their sins.
   \\v 6 John wore a coat of camel's hair and a leather belt around his waist, and he ate locusts and wild honey.
   `],
   ]);

const SetUp = () => {
  const { refdbSetup, handleRefChange } = useContext(SetupContext);

  useEffect(() => {
    refdbSetup();
  });

  return (
    <React.Fragment>
      <Observer>
        {() => (
          <div>
            {AutographaStore.layout === 0 && (
              <Paper
                className={useStyles.parentdiv}
                style={{ width: "100%", float: "left" }}
              >
                <div
                  style={{ width: "100%", float: "left" }}
                  className="layoutx"
                >
                  <EditorDemo usfmStrings={usfmStrings}/>
                </div>
              </Paper>
            )}
            {AutographaStore.layout === 1 && (
              <Paper
                className={useStyles.parentdiv}
                style={{ width: "100%", float: "left" }}
              >
                <div
                  className={useStyles.layoutx}
                  style={{ width: "50%", float: "left" }}
                >
                  <ReferenceSelector
                    onClick={(event) => handleRefChange(event, 0)}
                    refIds={AutographaStore.activeRefs[0]}
                    id={1}
                    layout={1}
                  />
                  <ReferenceDemo usfmStrings={usfmStrings} />
                </div>
                <div
                  style={{ width: "48%", float: "left" }}
                  className="layoutx"
                >
                  <EditorDemo usfmStrings={usfmStrings} />
                </div>
              </Paper>
            )}
            {AutographaStore.layout === 2 && (
              <Paper
                className={useStyles.parentdiv}
                style={{ width: "100%", float: "left" }}
              >
                <div
                  className={useStyles.layout2x}
                  style={{ width: "31.33%", float: "left" }}
                >
                  <ReferenceSelector
                    onClick={(event) => handleRefChange(event, 0)}
                    refIds={AutographaStore.activeRefs[0]}
                    id={21}
                    layout={1}
                  />
                  <ReferenceDemo usfmStrings={usfmStrings} />
                </div>

                <div
                  className={useStyles.layout2x}
                  style={{ width: "33.33%", float: "left" }}
                >
                  <ReferenceSelector
                    onClick={(event) => handleRefChange(event, 1)}
                    refIds={AutographaStore.activeRefs[1]}
                    id={22}
                    layout={2}
                  />
                  <ReferenceDemo 
                    usfmStrings={usfmStrings} 
                    refIds={AutographaStore.activeRefs[1]}
                    tIns={AutographaStore.tIns[1]}
                    tDel={AutographaStore.tDel[1]}
                  />
                </div>
                <div
                  style={{ padding: "10px", width: "33.33%", float: "left" }}
                  className="layout2x"
                >
                  <EditorDemo usfmStrings={usfmStrings} />
                </div>
              </Paper>
            )}
            {AutographaStore.layout === 3 && (
              <Paper
                className={useStyles.parentdiv}
                style={{ width: "100%", float: "left" }}
              >
                <div
                  className={useStyles.layout3x}
                  style={{ width: "25%", float: "left" }}
                >
                  <ReferenceSelector
                    onClick={(event) => handleRefChange(event, 0)}
                    refIds={AutographaStore.activeRefs[0]}
                    id={31}
                    layout={1}
                  />
                  <ReferenceDemo usfmStrings={usfmStrings} />
                </div>
                <div
                  className={useStyles.layout3x}
                  style={{ width: "25%", float: "left" }}
                >
                  <ReferenceSelector
                    onClick={(event) => handleRefChange(event, 1)}
                    refIds={AutographaStore.activeRefs[1]}
                    id={32}
                    layout={2}
                  />
                 <ReferenceDemo 
                    usfmStrings={usfmStrings} 
                    tIns={AutographaStore.tIns[1]}
                    tDel={AutographaStore.tDel[1]}
                    />
                </div>
                <div
                  className={useStyles.layout3x}
                  style={{ width: "25%", float: "left" }}
                >
                  <ReferenceSelector
                    onClick={(event) => handleRefChange(event, 2)}
                    refIds={AutographaStore.activeRefs[2]}
                    id={33}
                    layout={3}
                  />
                  {/* <ReferencePanel
                    refContent={AutographaStore.contentTwo}
                    refIds={AutographaStore.activeRefs[2]}
                    tIns={AutographaStore.tIns[2]}
                    tDel={AutographaStore.tDel[2]}
                  /> */}
                  <ReferenceDemo usfmStrings={usfmStrings} />
                </div>
                <div
                  style={{ padding: "10px", width: "23%", float: "right" }}
                  className="layout3x"
                >
                  <EditorDemo usfmStrings={usfmStrings} />
                </div>
              </Paper>
            )}
          </div>
        )}
      </Observer>
    </React.Fragment>
  );
};

export default SetUp;
