
import { Spawner } from '../node_modules/decentraland-builder-scripts/spawner'
import MetaViuBillboard from './item'

const MetaViu = new MetaViuBillboard()
const spawner = new Spawner(MetaViu)

spawner.spawn(
    'MetaViu',
    new Transform({
        position: new Vector3(4, 0, 8),
        scale: new Vector3(1, 1, 1),
    })
)