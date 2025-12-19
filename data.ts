import { DynastyData } from './types';
import { xia } from './dynasties/xia';
import { shang } from './dynasties/shang';
import { western_zhou } from './dynasties/westernZhou';
import { spring_autumn } from './dynasties/springAutumn';
import { warring_states } from './dynasties/warringStates';
import { qin } from './dynasties/qin';
import { western_han } from './dynasties/westernHan';
import { xin } from './dynasties/xin';
import { eastern_han } from './dynasties/easternHan';
import { three_kingdoms } from './dynasties/threeKingdoms';
import { western_jin } from './dynasties/westernJin';
import { eastern_jin } from './dynasties/easternJin';
import { nan_bei_chao } from './dynasties/nanBeiChao';
import { sui } from './dynasties/sui';
import { tang } from './dynasties/tang';
import { five_dynasties } from './dynasties/fiveDynasties';
import { northern_song } from './dynasties/northernSong';
import { southern_song } from './dynasties/southernSong';
import { yuan } from './dynasties/yuan';
import { ming } from './dynasties/ming';
import { qing } from './dynasties/qing';

export const STATIC_DYNASTY_DATA: Record<string, DynastyData> = {
  xia,
  shang,
  western_zhou,
  spring_autumn,
  warring_states,
  qin,
  western_han,
  xin,
  eastern_han,
  three_kingdoms,
  western_jin,
  eastern_jin,
  nan_bei_chao,
  sui,
  tang,
  five_dynasties,
  northern_song,
  southern_song,
  yuan,
  ming,
  qing
};